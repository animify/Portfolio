import type { StaticImageData } from "next/image";

export interface IMessage {
  label: string | React.ReactNode;
  image?: StaticImageData;
  type: "me" | "other";
}

export type IMessages = IMessage[];
