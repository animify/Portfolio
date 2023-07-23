"use client";

import clsx from "clsx";
import { IMessage } from "../app/types";
import IconBubbleTick from "./icons/IconBubbleTick";
import Image from "next/image";

interface Props {
  message: IMessage;
}

export default function Message({ message }: Props) {
  return (
    <div
      data-type={message.type}
      className={clsx(`flex group w-full peer`, {
        [`justify-start pr-20 [&+[data-type="me"]]:mt-1.5 [&+[data-type="other"]]:mt-4`]:
          message.type === "me",
        [`justify-end pl-20 [&+[data-type="other"]]:mt-1.5 [&+[data-type="me"]]:mt-4`]:
          message.type === "other",
      })}
    >
      <div
        className={clsx(
          `group-data-[type="me"]:bg-gray-750 group-data-[type="me"]:text-gray-100 group-data-[type="other"]:bg-blue-500 group-data-[type="other"]:text-blue-50 rounded-2xl relative`,
          {
            "px-3.5 py-2": !message.image,
          }
        )}
      >
        {message.image ? (
          <Image
            src={message.image}
            className="rounded-2xl"
            placeholder="blur"
            width={200}
            height={200}
            alt={""}
            priority
          />
        ) : (
          <p>{message.label}</p>
        )}

        {message.avatar && !message.image && (
          <div
            className={`w-5 h-5 rounded-full absolute group-data-[type="me"]:-left-8 group-data-[type="other"]:-right-8 -bottom-1.5`}
          >
            <Image
              src={message.avatar}
              className="rounded-full"
              placeholder="blur"
              alt={"Someone"}
              priority
            />
          </div>
        )}

        {!message.image && (
          <div
            className={`absolute group-data-[type="other"]:-bottom-[6px] group-data-[type="other"]:-right-[10px] group-data-[type="other"]:text-blue-500 group-data-[type="me"]:text-gray-750 group-data-[type="me"]:-left-[10px] group-data-[type="me"]:-bottom-[6px]`}
          >
            <div className={`group-data-[type="other"]:-scale-x-100`}>
              <IconBubbleTick />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
