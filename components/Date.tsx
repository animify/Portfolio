import clsx from "clsx";
import { IDate } from "../app/types";
import dayjs, { ManipulateType } from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

interface Props {
  meta: IDate;
}

export default function Date({ meta }: Props) {
  let date = dayjs();

  Object.entries(meta.dateDiff).forEach(([key, value]) => {
    date = date.add(value, key as ManipulateType);
  });

  const daysAgo = date.diff(dayjs(), "day");

  const prefix =
    daysAgo < -1 ? date.format("ddd") : daysAgo === -1 ? "Yesterday" : "Today";

  const value = `${prefix}, ${date.format("HH:mm")}`;

  return (
    <div
      className={clsx(
        `flex group w-full peer justify-center items-center px-20 pt-6 pb-4`,
        {}
      )}
    >
      <small className="font-medium text-gray-400">{value}</small>
    </div>
  );
}
