import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Image from "../../images/acupuncture2.jpeg";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={} type="video/mp4" /> */}
        <ImgBg src={Image} type="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Traditional Chinese Medicine</HeroH1>
        <HeroP>
          Help us grow the community by signing up an account. More healthy
          lifestyle content is waiting for you
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Sign up now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
