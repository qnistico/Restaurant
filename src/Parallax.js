import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = (props) => {
  return (
    <ParallaxBanner
      className="property_hero_img"
      layers={[{ image: props.imgsrc, amount: 0.35}]}
      style={{ height: props.height }}
    >
      <div>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxImg;
