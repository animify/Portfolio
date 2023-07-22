import Image from "next/image";
import { IMessage } from "../app/types";
import IconBubbleTick from "./icons/IconBubbleTick";
import clsx from "clsx";

interface Props {
  message: IMessage;
}

export default function OwnMessage({ message }: Props) {
  const hasImage = message.image !== undefined;

  return (
    <div
      data-type="own"
      className={`flex w-full justify-start pr-20 [&+[data-type="own"]]:mt-1.5 [&+[data-type="other"]]:mt-4`}
    >
      <div
        className={clsx("bg-gray-750 text-gray-100 relative rounded-2xl", {
          "px-3.5 py-2": !hasImage,
        })}
      >
        {message.image ? (
          <Image
            src={message.image}
            className="rounded-2xl"
            width={200}
            height={200}
            alt={""}
            priority
          />
        ) : (
          <p>{message.label}</p>
        )}

        {!hasImage && (
          <div className="w-4 h-4 rounded-full absolute -left-8 -bottom-0.5">
            <Image
              src="/images/avatar.jpg"
              className="rounded-full"
              alt="Stefan Mansson"
              width={24}
              height={24}
            />
          </div>
        )}
        {!hasImage && (
          <div className="absolute -bottom-[6px] -left-[10px] text-gray-750">
            <IconBubbleTick />
          </div>
        )}
      </div>
    </div>
  );
}
