import React, { ReactNode } from "react";
import { useRef } from "react";

const ShowMore = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = React.useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <p ref={textRef} className={`my-4 ${!expanded && "truncate"}`}>
        {children}
      </p>
      <button
        onClick={() => {
          setExpanded(!expanded);
          textRef.current && console.log(textRef.current.scrollHeight);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
    </>
  );
};

export default ShowMore;
