import MarkdownParser from "~/components/MarkdownParser";

const Test = () => {
  const myString = `# Heading 1\n## Heading 2\n### Heading 3\nNormal Text here`;

  return <MarkdownParser markdownString={myString} />;
};
export default Test;
