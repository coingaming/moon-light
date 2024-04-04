import SyntaxHighlighter from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark";
import CodePreviewWrapper from "./wrapper/CodePreviewWrapper";

const CodePreview = ({ code }: { code: string }) => (
  <CodePreviewWrapper code={code}>
    <SyntaxHighlighter
      language="typescript"
      id="code"
      style={codeStyle}
      className="!p-4 !pb-12 lg:!pe-12 !bg-gohan"
    >
      {code}
    </SyntaxHighlighter>
  </CodePreviewWrapper>
);

export default CodePreview;
