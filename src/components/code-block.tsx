import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // or any other style

const CodeBlock = ({ code }: any) => {
  return (
    <SyntaxHighlighter language="typescript" style={materialDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
