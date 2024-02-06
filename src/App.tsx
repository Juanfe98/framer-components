import "./App.css";
import ButtonScale from "./components/button-scale";
import Card from "./components/card-scrolling";
import GridItem from "./components/GridItem";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-primary">
        Framer Motion Implementations
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <GridItem title="Basic Scaling Button">
          <ButtonScale />
        </GridItem>
        <GridItem title="Test">
          <div className="max-h-60 w-full overflow-y-scroll flex flex-col max-w-80 ">
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
