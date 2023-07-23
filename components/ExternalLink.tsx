"use client";

import { Portal } from "@radix-ui/react-portal";
import clsx from "clsx";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import metaFramer from "../public/images/metaFramer.png";
import metaOverflow from "../public/images/metaOverflow.png";
import metaAmie from "../public/images/metaAmie.png";
import metaGitHub from "../public/images/metaGitHub.png";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

interface Props {
  href: string;
  className?: string;
  preview?: "overflow" | "framer" | "amie" | "github";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function ExternalLink({
  children,
  className,
  preview,
  icon,
  href,
}: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <Link
        href={href}
        target="_blank"
        className={clsx("group/link inline-flex gap-1.5", className)}
        onMouseMove={(event) => {
          setPosition({
            x: event.nativeEvent.clientX,
            y: event.nativeEvent.clientY,
          });
        }}
        onMouseOut={() => {
          setPosition({ x: 0, y: 0 });
        }}
      >
        {icon && (
          <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5">
            {icon}
          </span>
        )}
        <span className="underline-offset-[4px] group-hover/link:underline-offset-[5px] font-medium underline decoration-white/20 decoration-2 group-hover/link:decoration-white/40 transition-all">
          {children}
        </span>
      </Link>
      {preview && (
        <Portal asChild>
          <AnimatePresence>
            {position.x > 0 && position.y > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.24, duration: 0.16 },
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="fixed left-0 top-0 pointer-events-none py-4"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
              >
                <div className="rounded-2xl bg-gray-800/90 backdrop-blur shadow-test aspect-[7/4.5] w-56 relative overflow-hidden">
                  <span className="overflow-hidden rounded-t-2xl fade-bg w-full flex">
                    <Image
                      src={getPreviewSrc(preview)}
                      alt={preview}
                      loading="lazy"
                      placeholder="blur"
                    />
                  </span>
                  <div className="flex flex-col w-full absolute bottom-0 left-0 right-0 py-3 px-3.5">
                    <p className="text-sm font-medium line-clamp-1">
                      {getPreviewName(preview)}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {getPreviewDescription(preview)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Portal>
      )}
    </>
  );
}

function getPreviewName(preview: Props["preview"]) {
  switch (preview) {
    case "overflow":
      return "User flow diagramming tool for design teams | Overflow";
    case "framer":
      return "Framer —  Start your dream site with AI. Zero code, maximum speed.";
    case "amie":
      return "Amie - Joyful productivity";
    case "github":
      return "animify (Stefan Mansson)";
  }
}

function getPreviewDescription(preview: Props["preview"]) {
  switch (preview) {
    case "overflow":
      return "Create interactive user flows and stunning design presentations to engage your audience in synchronous or asynchronous design critique.";
    case "framer":
      return "Start your website with AI and design on a familiar canvas. Add animations, interactions and a CMS. Optimize for every breakpoint — no code needed and publish for free.";
    case "amie":
      return "Meet the all-in-one calendar. Schedule time for todos, events, and contacts with joy. Try it for free!";
    case "github":
      return "Design Engineer @amieso. animify has 88 repositories available. Follow their code on GitHub.";
  }
}

function getPreviewSrc(preview: Props["preview"]) {
  switch (preview) {
    case "overflow":
      return metaOverflow;
    case "framer":
      return metaFramer;
    case "amie":
      return metaAmie;
    case "github":
      return metaGitHub;
  }
}
