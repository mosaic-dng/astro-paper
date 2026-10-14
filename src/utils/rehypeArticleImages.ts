type Node = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
};

type File = {
  data: { astro?: { frontmatter?: Record<string, unknown> } };
};

function textContent(node: Node): string {
  return node.value ?? node.children?.map(textContent).join("") ?? "";
}

/** Improve rendered Markdown images without changing the article source. */
export function rehypeArticleImages() {
  return (tree: Node, file: File) => {
    const entries: Node[] = [];
    function collect(node: Node) {
      if (node.tagName === "img" || /^h[1-6]$/.test(node.tagName ?? "")) {
        entries.push(node);
      }
      node.children?.forEach(collect);
    }
    collect(tree);

    const title = String(file.data.astro?.frontmatter?.title ?? "正文");
    let section = "";
    for (const [index, node] of entries.entries()) {
      if (node.tagName !== "img") {
        section = textContent(node).trim();
        continue;
      }
      const props = node.properties ?? {};
      const src = props.src;
      if (typeof src !== "string" || !src.includes(".assets/")) continue;

      // Only derive context for the migrated images with hashed filenames.
      // Preserve author-written alt text and explicitly decorative images.
      if (
        !props.alt &&
        /\.assets\/[a-f\d]{8}\./i.test(src) &&
        props.role !== "presentation" &&
        props.ariaHidden !== "true" &&
        props.ariaHidden !== true
      ) {
        const next = entries[index + 1];
        const context =
          next?.tagName === "h1" ? textContent(next).trim() : section;
        props.alt =
          context && context !== title
            ? `${title}：${context}配图`
            : `${title}配图`;
      }

      // Astro generates the variants at build time and keeps src at full size.
      props.layout = "constrained";
      props.sizes = "(min-width: 768px) 736px, calc(100vw - 32px)";
      node.properties = props;
    }
  };
}
