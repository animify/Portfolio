import { IMessages } from "../app/types";
import OtherMessage from "./OtherMessage";
import OwnMessage from "./OwnMessage";

interface Props {
  messages: IMessages;
}

export default function Messages({ messages }: Props) {
  return (
    <div className="flex flex-col w-full">
      {messages.map((message, index) => {
        if (message.type === "me") {
          return <OwnMessage key={index} message={message} />;
        }

        return <OtherMessage key={index} message={message} />;
      })}
    </div>
  );
}
