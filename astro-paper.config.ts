import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
 site:{url:"https://ccio.eu.org/",title:"防火长城会梦见自由互联网吗？",description:"机场推荐",author:"404",profile:"https://ccio.eu.org/about/",ogImage:"default-og.png",lang:"zh-CN",timezone:"Asia/Shanghai",dir:"ltr"},
 posts:{perPage:10,perIndex:6,scheduledPostMargin:0},
 features:{lightAndDarkMode:true,dynamicOgImage:false,showArchives:true,showBackButton:true,editPost:{enabled:true,url:"https://github.com/mosaic-dng/astro-paper/edit/main/"},search:"pagefind"},
 socials:[],shareLinks:[{name:"telegram",url:"https://t.me/share/url?url=",linkTitle:"分享到 Telegram"},{name:"mail",url:"mailto:?subject=分享文章&body=",linkTitle:"通过邮件分享"}]
});
