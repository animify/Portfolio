import Image from "next/image";
import React from "react";
import { IMessages } from "./types";
import Messages from "../components/Messages";
import imageTape from "../public/images/tape.png";
import logoOverflow from "../public/images/logo-Overflow.png";
import logoFramer from "../public/images/logo-Framer.png";
import logoAmie from "../public/images/logo-Amie.png";
import imageBaby from "../public/images/baby.jpg";
import Cursors from "../components/Cursors";
import Link from "next/link";

const messages: IMessages = [
  {
    label: "Hey, I'm Stefan 👋",
    type: "me",
  },
  {
    label:
      "Here's a random baby pic that you didn't ask for. You'll sometimes see me use this across social media.",
    type: "me",
  },
  {
    label: "But what do you do?",
    image: imageBaby,
    type: "me",
  },
  {
    label: "Uhm hi, and thanks?",
    type: "other",
  },
  {
    label: "Is there something maybe more interesting I should know about you?",
    type: "other",
  },
  {
    label: (
      <>
        Hm, I'm currently a Design Engineer at{" "}
        <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5 mr-0.5">
          <Image
            className="relative top-[3px] -rotate-6 rounded shadow"
            src={logoAmie}
            alt="Amie logo"
            priority
          />
        </span>{" "}
        <strong>Amie</strong>.
      </>
    ),
    type: "me",
  },
  {
    label: (
      <>
        Used to be a Product Engineer at{" "}
        <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5 mr-0.5">
          <Image
            className="relative top-[3px] rotate-6 rounded shadow"
            src={logoFramer}
            alt="Framer logo"
            priority
          />
        </span>{" "}
        <strong>Framer</strong> and{" "}
        <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5 mr-0.5">
          <Image
            className="relative top-[3px] -rotate-6 rounded shadow"
            src={logoOverflow}
            alt="Overflow logo"
            priority
          />
        </span>{" "}
        <strong>Overflow</strong>, building the best creative tools in the
        industry.
      </>
    ),
    type: "me",
  },
  {
    label: "Design Engineer? What's that?",
    type: "other",
  },
  {
    label: "When I found out, I'll write a blog post about it.",
    type: "me",
  },
  {
    label:
      "But to have you know, what we're building at Amie is... pretty next level.",
    type: "me",
  },
  {
    label: (
      <>
        Is this you on GitHub? 🤔{" "}
        <Link
          href="https://github.com/animify"
          target="_blank"
          className="underline-offset-[5px] hover:underline-offset-[6px] underline decoration-white/20 decoration-1 hover:decoration-white/40 transition-all"
        >
          github.com/animify
        </Link>
      </>
    ),
    type: "other",
  },
  {
    label:
      "Yup! I'm a big fan of creating helpful tools for the community, and also where I keep my latest experiments.",
    type: "me",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-xl py-20 px-12">
      <div className="flex -mt-12 mb-8">
        <div className="flex items-center pointer-events-none select-none justify-center -rotate-12 opacity-100 transition-opacity h-16 w-16">
          <Image src={imageTape} alt="Tape" priority />
        </div>
      </div>
      <Messages messages={messages} />
      <Cursors />
    </div>
  );
}
