import logoOverflow from "../public/images/logo-Overflow.png";
import logoFramer from "../public/images/logo-Framer.png";
import logoAmie from "../public/images/logo-Amie.png";
import avatarMe from "../public/images/avatarMe.png";
import avatar1 from "../public/images/avatar1.png";
import avatar2 from "../public/images/avatar2.png";
import avatar3 from "../public/images/avatar3.png";
import imageBaby from "../public/images/baby.jpg";
import ExternalLink from "../components/ExternalLink";
import type { IMessages } from "./types";
import Image from "next/image";

export const messages: IMessages = [
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
        <ExternalLink
          href="https://amie.so"
          preview="amie"
          icon={
            <Image
              className="relative top-[3px] -rotate-6 rounded shadow group-hover/link:rotate-2 transition-transform"
              src={logoAmie}
              alt="Amie logo"
              priority
            />
          }
        >
          Amie
        </ExternalLink>
        .
      </>
    ),
    type: "me",
    avatar: avatarMe,
  },
  {
    label: (
      <>
        Used to be a Product Engineer at{" "}
        <ExternalLink
          href="https://framer.com"
          preview="framer"
          icon={
            <Image
              className="relative top-[3px] rotate-6 rounded shadow group-hover/link:-rotate-2 transition-transform"
              src={logoFramer}
              alt="Framer logo"
              placeholder="blur"
              priority
            />
          }
        >
          Framer
        </ExternalLink>{" "}
        and
        <ExternalLink
          href="https://overflow.io"
          preview="overflow"
          icon={
            <Image
              className="relative top-[3px] -rotate-6 rounded shadow group-hover/link:rotate-2 transition-transform"
              src={logoOverflow}
              alt="Overflow logo"
              placeholder="blur"
              priority
            />
          }
        >
          Overflow
        </ExternalLink>
        , building the best creative tools in the industry.
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
        <ExternalLink href="https://github.com/animify" preview="github">
          github.com/animify
        </ExternalLink>
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
  {
    dateDiff: {
      minute: -1,
    },
  },
  {
    label: (
      <>
        Oh no more questions? Okie, here's my Twitter{" "}
        <ExternalLink href="https://x.com/_animify" preview="twitter">
          @_animify
        </ExternalLink>
        . Check it out for any fun stuff I've been building!
      </>
    ),
    type: "me",
    avatar: avatarMe,
  },
  {
    label:
      "Been quite busy lately so this is still WIP - more to come soon! 👋",
    type: "me",
    avatar: avatarMe,
  },
];
