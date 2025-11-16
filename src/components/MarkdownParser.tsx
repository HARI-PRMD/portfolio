import { marked } from "marked";
import React from "react";

type Props = {
  markdownString: string;
  className?: string;
};

const MarkdownParser: React.FC<Props> = ({ markdownString, className }) => {
  // Function to convert Markdown to HTML using 'marked' library
  const parseMarkdownToHTML = (markdownString: string): { __html: string } => {
    return { __html: marked.parse(markdownString) as string };
  };
  const combinedClassName = ["markdown-body", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      className={combinedClassName}
      dangerouslySetInnerHTML={parseMarkdownToHTML(markdownString)}
    />
  );
};

export default MarkdownParser;
