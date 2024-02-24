import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import { ContentSkeleton } from "./content-skeleton";

const Accordion = ({ i, expanded, setExpanded }: any) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentSkeleton />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const AccordionCode = `
!IMPORTANT: As the accordion implementation is bigger than one component
you can find the rest of components here ->
https://github.com/Juanfe98/framer-components/tree/main/src/components/accordion-menu

const Accordion = ({ i, expanded, setExpanded }: any) => {
  const isOpen = i === expanded;

  // By using AnimatePresence to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentSkeleton/>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
`;

export const Example = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="example-container">
      {accordionIds.map((i) => (
        <Accordion
          key={i}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};

const accordionIds = [0, 1, 2, 3];
