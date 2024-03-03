import { useState } from "react";
import CodeBlock from "../code-block";
import Header from "./Header";

interface GridItemProps {
  title: string;
  children: React.ReactNode;
  code: string;
  align?: "center" | "left" | "right";
}

const GridItem = ({
  children,
  align = "center",
  title,
  code,
}: GridItemProps) => {
  const [counter, setCounter] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const handleRefresh = () => {
    setCounter((counter) => counter + 1);
  };

  const handleShowCode = () => {
    setShowCode((showCode) => !showCode);
  };

  const getAlignmentClasses = (align: "center" | "left" | "right") => {
    const alignmentClasses = {
      center: "justify-center",
      left: "justify-start",
      right: "justify-end",
    };
    return alignmentClasses[align];
  };

  const alignmentClasses = getAlignmentClasses(align);
  return (
    <div key={counter} className="bg-gray-95 shadow-md rounded-xl">
      <Header title={title} handleRefresh={handleRefresh} />
      {/* Here i will add an optional small description of the component */}
      <div className={`flex ${alignmentClasses} items-center w-full mt-4 p-4`}>
        {children}
      </div>
      {showCode && <CodeBlock code={code} />}
      <div className="flex justify-end p-4 border-t border-t-gray-20">
        <button onClick={handleShowCode}>
          <span>&lt;/ show code &gt;</span>
        </button>
      </div>
    </div>
  );
};

export default GridItem;
