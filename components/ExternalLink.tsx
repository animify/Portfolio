"use client";

import clsx from "clsx";
import { IDate } from "../app/types";
import dayjs, { ManipulateType } from "dayjs";
import Link from "next/link";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

interface Props {
  href: string;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function ExternalLink({
  children,
  className,
  icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={clsx("group/link inline-flex gap-1.5", className)}
    >
      {icon && (
        <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5">
          {icon}
        </span>
      )}
      <span className="underline-offset-[4px] group-hover/link:underline-offset-[5px] font-medium underline decoration-white/20 decoration-2 group-hover/link:decoration-white/40 transition-all">
        {children}
      </span>
    </Link>
  );
}
