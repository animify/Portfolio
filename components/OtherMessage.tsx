import { IMessage } from "../app/types";
import IconBubbleTick from "./icons/IconBubbleTick";

interface Props {
  message: IMessage;
}

export default function OtherMessage({ message }: Props) {
  return (
    <div
      data-type="other"
      className={`flex w-full peer justify-end pl-20 [&+[data-type="other"]]:mt-1.5 [&+[data-type="own"]]:mt-4`}
    >
      <div className="px-3.5 py-2 bg-blue-500 text-blue-50 rounded-2xl relative">
        <p>{message.label}</p>

        <div className="absolute -bottom-[6px] -right-[10px] text-blue-500">
          <div className="-scale-x-100">
            <IconBubbleTick />
          </div>
        </div>
      </div>
    </div>
  );
}
