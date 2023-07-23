import { IMessages } from "../app/types";
import Date from "./Date";
import Message from "./Message";

interface Props {
  messages: IMessages;
}

export default function Messages({ messages }: Props) {
  return (
    <div className="flex flex-col w-full">
      {messages.map((message, index) => {
        if ("dateDiff" in message) {
          return <Date key={index} meta={message} />;
        }

        return <Message key={index} message={message} />;
      })}
    </div>
  );
}
