import React, { ReactNode, useEffect } from "react";
import { useRef } from "react";

const ShowMore = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setScrollHeight(textRef.current.scrollHeight);
    }
  }, [expanded]);

  return (
    <>
      <p ref={textRef} className={`my-4 ${!expanded && "truncate"}`}>
        {children}
      </p>
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        Show {expanded ? "less" : "more"}
      </button>
      <br />
      scrollheight: {scrollHeight}
    </>
  );
};

export default ShowMore;
