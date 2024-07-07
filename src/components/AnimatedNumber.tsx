import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }: any) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const { number } = useSpring({
    from: { number: 0 },
    number: inView  ? value : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
    onRest: () => setHasAnimated(true),
  });

  return (
    <animated.div ref={ref}>
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export default AnimatedNumber;
