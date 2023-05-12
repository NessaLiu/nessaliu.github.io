import "./quote.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
        },
      })
      .from(
        containerRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          skewX: 4,
          x: 10,
        },
        0.5
      );
  });
  return (
    <div ref={containerRef} className="quote-container">
      <div className="quote-text">
        <p>
          "Yesterday is history, tomorrow is a mystery, but today is a gift.
          That is why it is called the present."
          <br />- <em>Eleanor Roosevelt</em>
        </p>
      </div>
    </div>
  );
};

export default Quote;
