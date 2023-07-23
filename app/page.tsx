import React from "react";
import Messages from "../components/Messages";
import Cursors from "../components/Cursors";
import { messages } from "./messages";
import Sticker from "../components/Sticker";

export default function Page() {
  return (
    <div className="mx-auto max-w-xl pt-8 pb-20 px-[52px]">
      <Sticker />
      <Messages messages={messages} />
      <Cursors />
    </div>
  );
}
