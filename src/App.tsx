import "./App.css";
import ButtonScale from "./components/button-scale";
import Card from "./components/card-scrolling";
import CodeBlock from "./components/code-block";

interface GridItemProps {
  children: React.ReactNode;
  title?: string;
  align?: "center" | "left" | "right";
}

const GridItem = ({
  title = "",
  children,
  align = "center",
}: GridItemProps) => {
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-300 p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        <CodeBlock code={ButtonScale.code} />
        <div
          className={`flex ${alignmentClasses} justify-center items-center w-full mt-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        Framer Motion Implementations
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <GridItem title="Basic Scaling Button">
          <ButtonScale />
        </GridItem>
        <GridItem title="Test">
          <div className="max-h-60 w-full overflow-y-scroll flex flex-col max-w-80 overflow-x-hidden">
            {items.map((item, i) => (
              <Card key={i} text={item} index={i} />
            ))}
          </div>
        </GridItem>
      </div>
    </div>
  );
}

export default App;
