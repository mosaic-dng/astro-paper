import fs from "node:fs/promises";
import path from "node:path";
const base=path.resolve("src/content/posts");
const files=(await fs.readdir(base)).filter(f=>f.endsWith(".md")&&!f.startsWith("_"));
const seen=new Set(),errors=[];
for(const file of files){
 const slug=file.slice(0,-3).toLowerCase();
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))errors.push(file+"：文件名请使用小写英文字母、数字和短横线。");
 if(seen.has(slug))errors.push(file+"：文章地址重复。");seen.add(slug);
 const text=await fs.readFile(path.join(base,file),"utf8");
 if(/notion-file-block:|prod-files-secure|X-Amz-Signature|<unknown\b|<synced_block/.test(text))errors.push(file+"：存在未迁移的 Notion 内容或临时图片链接。");
 const images=[...text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m=>m[1].replace(/^<|>$/g,""));
 const cover=text.match(/^ogImage:\s*["']?([^"'\n]+)["']?$/m);if(cover)images.push(cover[1]);
 for(const image of images){
  if(/^https?:\/\//.test(image))continue;
  if(/^[A-Z]:|^file:|\\/.test(image)){errors.push(file+"：图片使用了电脑绝对路径："+image);continue;}
  const local=image.startsWith("/")?path.resolve("public","."+image):path.resolve(base,decodeURIComponent(image.split(/[?#]/)[0]));
  try{const st=await fs.stat(local);if(!st.isFile()||!st.size)throw Error("empty");}catch{errors.push(file+"：图片没有一起上传："+image);}
 }
}
if(errors.length){console.error(errors.join("\n"));process.exit(1);}
console.log("内容检查通过："+files.length+" 篇文章，图片引用均完整。");
