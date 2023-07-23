import { IMessages } from "../app/types";
import Message from "./Message";

interface Props {
  messages: IMessages;
}

export default function Messages({ messages }: Props) {
  return (
    <div className="flex flex-col w-full">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}
