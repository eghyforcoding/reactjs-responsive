import React, { useEffect } from "react";
import {
  TypeContainer,
  InfoContainer,
  GalleryContainer,
  ChineseSub,
  EnglishSub,
  ChiTitle,
  ChiDetailWrap,
  EngTitle,
  EngDetailWrap,
} from "./TypeElement";

const TreatmentType = () => {

useEffect(()=>{
  
})

  return (
    <>
      <TypeContainer>
        <GalleryContainer></GalleryContainer>
        <InfoContainer>
          <ChineseSub>
            <ChiTitle></ChiTitle>
            <ChiDetailWrap></ChiDetailWrap>
          </ChineseSub>
          <EnglishSub>
            <EngTitle></EngTitle>
            <EngDetailWrap></EngDetailWrap>
          </EnglishSub>
        </InfoContainer>
      </TypeContainer>
    </>
  );
};

export default TreatmentType;
