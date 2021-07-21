import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Parallax = (props) => {
  return (
    <ParallaxBanner
      className="parallaxclass2"
      layers={[{ image: props.imgsrc, amount: 0.35}]}
      style={{ height: props.height }}
    >
      <div>{props.children}</div>
    </ParallaxBanner>
  );
};

export default Parallax;
