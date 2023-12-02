import React from "react";
import { useRef } from "react";

const ShowMore = ({ children }: { children: ReactNode }) => {
  const [showMore, setShowMore] = React.useState(false);
  const textRef = useRef(null);

  return (
    <>
      <p ref={textRef} className={`w-1/2 my-4 ${!showMore && "truncate"}`}>
        {children}
      </p>
      <button
        onClick={() => {
          setShowMore(!showMore);
          console.log(textRef.current.scrollHeight);
        }}
      >
        Show {showMore ? "less" : "more"}
      </button>
    </>
  );
};

export default ShowMore;
