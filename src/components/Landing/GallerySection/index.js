import React, { useState } from "react";
import Image from "../../../images/herbs2.jpeg";
import {
  GalleryContainer,
  GalleryBg,
  ImgBg,
  GalleryBtnWrap,
  GalleryContent,
  GalleryTitle,
  GalleryLine,
  BtnLink,
} from "./GalleryElement";
// import { Button } from "../../ButtonElement";

const GallerySection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <GalleryContainer>
      <GalleryBg>
        {/* <VideoBg autoPlay loop muted src={} type="video/mp4" /> */}
        <ImgBg src={Image} type="image" />
      </GalleryBg>
      <GalleryContent>
        <GalleryTitle>Holistic Balance</GalleryTitle>
        <GalleryTitle>Traditional Chinese Medicine</GalleryTitle>
        <GalleryLine>
          Want to know more about your health condition? Or you have health
          concerns bothering you?
        </GalleryLine>
        <GalleryLine>
          Make an appointment and let our doctor guide you through.
        </GalleryLine>
        <GalleryBtnWrap>
          <BtnLink to="/appointment">Make an appointment</BtnLink>
        </GalleryBtnWrap>
      </GalleryContent>
    </GalleryContainer>
  );
};

export default GallerySection;
