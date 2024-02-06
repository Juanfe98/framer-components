import { useState } from "react";
import Card from "../card-scrolling";
import CodeBlock from "../code-block";
import Header from "./Header";

interface GridItemProps {
  title: string;
  children: React.ReactNode;
  align?: "center" | "left" | "right";
}

const GridItem = ({ children, align = "center", title }: GridItemProps) => {
  const [counter, setCounter] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const handleRefresh = () => {
    setCounter((counter) => counter + 1);
  };

  const handleShowCode = () => {
    setShowCode((code) => !code);
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
    <div key={counter} className="bg-gray-95 shadow-md rounded-lg ">
      <Header title={title} handleRefresh={handleRefresh} />
      <div
        className={`flex ${alignmentClasses} justify-center items-center w-full mt-4 p-4`}
      >
        {children}
      </div>
      {showCode && <CodeBlock code={Card.code} />}
      <div className="flex justify-end p-4">
        <button onClick={handleShowCode}>
          <span>&lt;/ show code &gt;</span>
        </button>
      </div>
    </div>
  );
};

export default GridItem;
