import "./App.css";
import {
  AccordionCode,
  Example,
} from "./components/accordion-menu/accordion-menu";
import ButtonScale from "./components/button-scale";
import Card from "./components/card-scrolling";
import Dialog from "./components/dialog";
import GridItem from "./components/GridItem";
import { NotificationStack } from "./components/notification-stack/notification-stack";

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-95">
        Framer Motion Implementations
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <GridItem title="Basic button click animation" code={ButtonScale.code}>
          <ButtonScale />
        </GridItem>
        <GridItem title="Enter item on scroll" code={Card.code}>
          <div className="max-h-60 w-96 overflow-y-scroll overflow-x-hidden flex flex-col px-2">
            {items.map((item, i) => (
              <Card key={i} text={item} index={i} />
            ))}
          </div>
        </GridItem>
        <GridItem title="Dialog" code={Dialog.code}>
          <Dialog />
        </GridItem>
        <GridItem title="Accordion Menu" code={AccordionCode}>
          <Example />
        </GridItem>
        <GridItem title="Notification Stack" code={NotificationStack.code}>
          <NotificationStack />
        </GridItem>
      </div>
    </div>
  );
}

export default App;
