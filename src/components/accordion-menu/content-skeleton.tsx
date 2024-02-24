import { motion } from "framer-motion";

function mix(start: number, end: number, progress: number) {
  return start * (1 - progress) + end * progress;
}

const randomInt = (min: number, max: number) =>
  Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 10);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }: any) => (
  <div className="word" style={{ width }} />
);

const Paragraph = ({ words }: any) => (
  <div className="paragraph">
    {words.map((width: any) => (
      <Word width={width} />
    ))}
  </div>
);

export const ContentSkeleton = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    {paragraphs.map((words: any) => (
      <Paragraph words={words} />
    ))}
  </motion.div>
);
