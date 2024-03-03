import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./close-button";
import { add, remove } from "../../utils/array";
import "./styles.css";

export const NotificationStack = () => {
  const [notifications, setNotifications] = useState<number[]>([0]);

  return (
    <div className="custom-container">
      <ul>
        <AnimatePresence initial={false}>
          {notifications.map((id, index) => (
            <motion.li
              key={id}
              // @ts-ignore - Framer is not fully suported for ts
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <span className="absolute mx-4 my-4">
                {`Notification Message ${index + 1} 🥳`}
              </span>
              <CloseButton
                close={() => setNotifications(remove(notifications, id))}
              />
            </motion.li>
          ))}{" "}
        </AnimatePresence>
      </ul>
      <button
        className="add"
        onClick={() => setNotifications(add(notifications))}
      >
        +
      </button>
    </div>
  );
};

NotificationStack.code = `
export const NotificationStack = () => {
  const [notifications, setNotifications] = useState<number[]>([0]);

  return (
    <div className="custom-container">
      <ul>
        <AnimatePresence initial={false}>
          {notifications.map((id, index) => (
            <motion.li
              key={id}
              // @ts-ignore - Framer is not fully suported for ts
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <span className="absolute mx-4 my-4">
                {Notification Message 🥳}
              </span>
              <CloseButton
                close={() => setNotifications(remove(notifications, id))}
              />
            </motion.li>
          ))}{" "}
        </AnimatePresence>
      </ul>
      <button
        className="add"
        onClick={() => setNotifications(add(notifications))}
      >
        +
      </button>
    </div>
  );
};

`;
