import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  text: React.ReactText[];
}

export default function SwappingText({ text }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const previousText = text[currentIndex];
  const currentText = text[nextIndex];
  const beginTimer = useCallback(() => {
    if (!text[currentIndex + 1]) return;

    window.setTimeout(() => {
      setCurrentIndex(currentIndex + 1);

      if (text.length !== nextIndex + 1) {
        window.setTimeout(() => {
          setNextIndex(nextIndex + 1);
        }, 3000);
      }
    }, 3000);
  }, [currentIndex, nextIndex, text]);

  useEffect(() => {
    beginTimer();
  }, [beginTimer, currentIndex]);

  return (
    <div className="swappingtext">
      <AnimatePresence>
        {nextIndex !== currentIndex && (
          <motion.span
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.6, type: "linear" }}
            className="inner"
          >
            {previousText}
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {nextIndex === currentIndex && (
          <motion.span
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: "linear" }}
            className="inner"
          >
            {currentText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
