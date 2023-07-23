import type { StaticImageData } from "next/image";

export interface IMessage {
  label: string | React.ReactNode;
  image?: StaticImageData;
  type: "me" | "other";
  avatar: StaticImageData;
}

export interface IDate {
  dateDiff: {
    day?: number;
    minute?: number;
    hour?: number;
  };
}

export type IMessages = (IMessage | IDate)[];
