import React from "react";
import TypeIt from "typeit-react";

export function TypingCurser({ words }: { words: string[] }) {
  return (
    <TypeIt
      options={{
        strings: words,
        speed: 30,
        waitUntilVisible: true,
        loop: true,
        breakLines: false,
        deleteSpeed: 10,
        lifeLike: true,
        cursorChar: "|",
        pause: 300,
        // loopDelay: 3000,
      }}
    />
  );
}
