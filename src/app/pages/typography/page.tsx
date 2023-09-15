import Header from "@/app/components/header";
import { convertMarkdownToHTML, markdownContent } from "@/markdown";

export default function Typography() {
  const htmlContent = convertMarkdownToHTML(markdownContent);

  // prose lg:prose-xl prose-p:text-gray-400 prose-h1:text-gray-300

  return (
    <div className="flex flex-col gap-10">
      <Header level="h1" text="Typography" />
      <div className="">
        <div className="" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}
