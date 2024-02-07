import { motion } from "framer-motion";
function Dialog() {
  const animationVariants = {
    hidden: { y: -50, opacity: 0 }, // Start from slightly above and fade in
    visible: { y: 0, opacity: 1 }, // End at the original position
  };

  return (
    <motion.div
      className="text-white m-auto border-gray-50 w-96 border rounded p-4 max-h-screen bg-gray-10"
      variants={animationVariants} // Assign variants
      initial="hidden" // Initial state before animation
      animate="visible" // State to animate to
      transition={{ duration: 0.3, ease: "easeOut" }} // Transition details
    >
      <p className="text-white text-xl font-bold">Titulo</p>
      <div className="my-4">
        <p className="text-gray-75">This is the Dialog component</p>
      </div>
      <div className="mt-8 flex justify-between">
        <button
          className="px-4 py-2 rounded-lg border border-white text-sm hover:brightness-75"
          onClick={() => alert("Canceled")}
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Confirmed")}
          className="px-4 py-2 bg-blue rounded text-sm hover:brightness-75"
        >
          Confirm
        </button>
      </div>
    </motion.div>
  );
}

Dialog.code = `
function Dialog() {
  const animationVariants = {
    hidden: { y: -50, opacity: 0 }, // Start from slightly above and fade in
    visible: { y: 0, opacity: 1 }, // End at the original position
  };

  return (
    <motion.div
      className="text-white m-auto border-gray-50 w-96 border rounded p-4 max-h-screen bg-gray-10"
      variants={animationVariants} // Assign variants
      initial="hidden" // Initial state before animation
      animate="visible" // State to animate to
      transition={{ duration: 0.3, ease: "easeOut" }} // Transition details
    >
      <p className="text-white text-xl font-bold">Titulo</p>
      <div className="my-4">
        <p className="text-gray-75">This is the Dialog component</p>
      </div>
      <div className="mt-8 flex justify-between">
        <button
          className="px-4 py-2 rounded-lg border border-white text-sm hover:brightness-75"
          onClick={() => alert("Canceled")}
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Confirmed")}
          className="px-4 py-2 bg-blue rounded text-sm hover:brightness-75"
        >
          Confirm
        </button>
      </div>
    </motion.div>
  );
}
`;

export default Dialog;
