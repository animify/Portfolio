import Image from "next/image";
import React from "react";
import { IMessages } from "./types";
import Messages from "../components/Messages";
import imageTape from "../public/images/tape.png";
import logoOverflow from "../public/images/logo-Overflow.png";
import logoFramer from "../public/images/logo-Framer.png";
import logoAmie from "../public/images/logo-Amie.png";
import avatarMe from "../public/images/avatarMe.png";
import avatar1 from "../public/images/avatar1.png";
import avatar2 from "../public/images/avatar2.png";
import avatar3 from "../public/images/avatar3.png";
import imageBaby from "../public/images/baby.jpg";
import Cursors from "../components/Cursors";
import Link from "next/link";

const messages: IMessages = [
  {
    dateDiff: {
      minute: -5,
      hour: -2,
      day: -2,
    },
  },
  {
    label: "Hey, I'm Stefan 👋",
    type: "me",
    avatar: avatarMe,
  },
  {
    label:
      "Here's a random baby pic that you didn't ask for. You'll sometimes see me use this across social media.",
    type: "me",
    avatar: avatarMe,
  },
  {
    label: "But what do you do?",
    image: imageBaby,
    type: "me",
    avatar: avatarMe,
  },
  {
    label: "Uhm hi, and thanks?",
    type: "other",
    avatar: avatar1,
  },
  {
    label: "Is there something maybe more interesting I should know about you?",
    type: "other",
    avatar: avatar2,
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
    avatar: avatarMe,
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
            placeholder="blur"
            priority
          />
        </span>{" "}
        <strong>Framer</strong> and{" "}
        <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5 mr-0.5">
          <Image
            className="relative top-[3px] -rotate-6 rounded shadow"
            src={logoOverflow}
            alt="Overflow logo"
            placeholder="blur"
            priority
          />
        </span>{" "}
        <strong>Overflow</strong>, building the best creative tools in the
        industry.
      </>
    ),
    type: "me",
    avatar: avatarMe,
  },
  {
    dateDiff: {
      minute: -24,
      hour: -4,
      day: -1,
    },
  },
  {
    label: "Design Engineer? What's that?",
    type: "other",
    avatar: avatar3,
  },
  {
    label: "When I found out, I'll write a blog post about it.",
    type: "me",
    avatar: avatarMe,
  },
  {
    label:
      "But to have you know, what we're building at Amie is... pretty next level.",
    type: "me",
    avatar: avatarMe,
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
    avatar: avatar1,
  },
  {
    dateDiff: {
      minute: 14,
      hour: -6,
    },
  },
  {
    label:
      "Yup! I'm a big fan of creating helpful tools for the community, and also where I keep my latest experiments.",
    type: "me",
    avatar: avatarMe,
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-xl pt-8 pb-20 px-[52px]">
      <div className="flex mb-2 justify-center">
        <div className="flex items-center pointer-events-none select-none justify-center -rotate-12 opacity-100 transition-opacity h-16 w-16">
          <Image src={imageTape} alt="Tape" priority placeholder="blur" />
        </div>
      </div>
      <Messages messages={messages} />
      <Cursors />
    </div>
  );
}
