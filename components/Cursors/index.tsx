"use client";

import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Cursor } from "./Cursor";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

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

  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    const setFp = async () => {
      const fp = await FingerprintJS.load();
      const { visitorId } = await fp.get();

      setFingerprint(visitorId);
    };

    setFp();
  }, []);

  const channel = useMemo(() => {
    return supabase
      .channel("live")
      .on("broadcast", { event: "cursor" }, (event) => {
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
      event: "cursor",
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

  console.log("cursors", cursors);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50">
      {Object.entries(cursors).map(([userId, cursor]) => {
        if (userId === fingerprint) return null;
        return <Cursor point={[cursor.x, cursor.y]} />;
      })}
    </div>
  );
}
