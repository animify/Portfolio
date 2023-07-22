import * as React from "react";
import { usePerfectCursor } from "./usePerfectCursor";

export function Cursor({ point }: { point: number[] }) {
  const rCursor = React.useRef<SVGSVGElement>(null);

  const animateCursor = React.useCallback((point: number[]) => {
    const elm = rCursor.current;
    if (!elm) return;
    elm.style.setProperty(
      "transform",
      `translate(${point[0]}px, ${point[1]}px)`
    );
  }, []);

  const onPointMove = usePerfectCursor(animateCursor);

  React.useLayoutEffect(() => onPointMove(point), [onPointMove, point]);

  return (
    <svg
      ref={rCursor}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="38"
      fill="none"
      viewBox="0 0 25 38"
    >
      <g
        fillRule="evenodd"
        clipRule="evenodd"
        filter="url(#filter0_d_7866_1567)"
      >
        <path
          fill="#fff"
          d="M3 18.015V2l11.591 11.619H7.55l-.151.124L3 18.015z"
        ></path>
        <path
          fill="#36B7FF"
          d="M4 4.407v11.188l2.969-2.866.16-.139h5.036L4 4.407z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_7866_1567"
          width="24.2"
          height="37.2"
          x="0.4"
          y="0.4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="1.3"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7866_1567"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7866_1567"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
