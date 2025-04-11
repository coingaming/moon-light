import SyntaxHighlighter from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark";
import CodePreviewWrapper from "./wrapper/CodePreviewWrapper";

const CodePreview = ({ code }: { code: string }) => (
  <CodePreviewWrapper code={code}>
    <SyntaxHighlighter
      language="typescript"
      id="code"
      style={codeStyle}
      className="!p-space-16 !pb-space-48 lg:!pe-space-48 !bg-tertiary"
    >
      {code}
    </SyntaxHighlighter>
  </CodePreviewWrapper>
);

export default CodePreview;
