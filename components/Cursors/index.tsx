"use client";

import { RealtimeChannel, createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ClientJS } from "clientjs/dist/client.base.min.js";
import { Cursor } from "./Cursor";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://jutpkgoovbyfkrldojsi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dHBrZ29vdmJ5ZmtybGRvanNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMzEwOTEsImV4cCI6MjAwNTYwNzA5MX0.aVC0Uc7Z9XVaNU7GJ01N5y8qPOmwIiyweKECce_gZnI",
  {}
);

export default function Cursors() {
  const [cursors, setCursors] = useState<
    Record<string, { x: number; y: number }>
  >({});

  const fingerprint = useMemo(() => {
    const client = new ClientJS();
    return client.getFingerprint();
  }, []);

  const channel = useMemo(() => {
    return supabase
      .channel("live")
      .on("broadcast", { event: "cursor-pos" }, (event) => {
        setCursors((cursors) => ({
          ...cursors,
          [event.payload.client]: {
            x: event.payload.x,
            y: event.payload.y,
          },
        }));
      })
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          // your callback function will now be called with the messages broadcast by the other client
        }
      });
  }, []);

  const handleCursorChange = useCallback((event: MouseEvent) => {
    channel.send({
      type: "broadcast",
      event: "cursor-pos",
      payload: {
        client: fingerprint,
        x: event.clientX,
        y: event.clientY,
      },
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleCursorChange);
    return () => {
      document.removeEventListener("mousemove", handleCursorChange);
    };
  }, [handleCursorChange]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50">
      {Object.entries(cursors).map(([userId, cursor]) => {
        const { x, y } = cursor;

        return <Cursor point={[x, y]} />;
      })}
    </div>
  );
}
