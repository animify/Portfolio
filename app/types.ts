export interface IMessage {
  label: string | React.ReactNode;
  image?: string;
  type: "me" | "other";
}

export type IMessages = IMessage[];
