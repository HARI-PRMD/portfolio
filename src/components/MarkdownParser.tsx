import { marked } from "marked";

type Props = {
  markdownString: string;
  className?: string;
};

const parseMarkdownToHTML = (markdownString: string): { __html: string } => {
  return { __html: marked.parse(markdownString) as string };
};

const MarkdownParser: React.FC<Props> = ({ markdownString, className }) => {
  return (
    <div
      className={["markdown-body", className].filter(Boolean).join(" ")}
      dangerouslySetInnerHTML={parseMarkdownToHTML(markdownString)}
    />
  );
};

export default MarkdownParser;
