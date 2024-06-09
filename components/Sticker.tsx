"use client";

import Image from "next/image";
import imageTape from "../public/images/tape.png";
import { motion } from "framer-motion";

export default function Sticker() {
  return (
    <div className="flex mb-2 justify-center">
      <motion.div
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        drag
        onDragStart={() => document.body.classList.add("grabbing")}
        onDragEnd={() => document.body.classList.remove("grabbing")}
        className="flex items-center justify-center h-16 w-16 cursor-grab"
      >
        <Image
          className="pointer-events-none select-none -rotate-12"
          src={imageTape}
          alt="Sticker =)"
          priority
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
}
