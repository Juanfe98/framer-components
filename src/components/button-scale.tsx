import { motion } from "framer-motion";

const ButtonScale = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="bg-blue-800 py-4 px-10 text-white rounded-xl"
    >
      Click me!
    </motion.button>
  );
};

ButtonScale.code = `
const ButtonScale = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="bg-blue-800 py-3 px-6 text-white rounded-xl"
    >
      Click me!
    </motion.button>
  );
};
`;

export default ButtonScale;
