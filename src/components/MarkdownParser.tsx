import { marked } from "marked";
import React from "react";

type Props = {
  markdownString: string;
  className?: string;
};

// Disabling mangle and headerIds options to clear warnings
const markedOptions = {
  mangle: false,
  headerIds: false,
};

const MarkdownParser: React.FC<Props> = ({ markdownString, className }) => {
  // Function to convert Markdown to HTML using 'marked' library
  const parseMarkdownToHTML = (markdownString: string): { __html: string } => {
    return { __html: marked(markdownString, markedOptions) };
  };
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={parseMarkdownToHTML(markdownString)}
    />
  );
};

export default MarkdownParser;
