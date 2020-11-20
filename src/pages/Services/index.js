import React from "react";
import YinYang from "../../images/yinyang.png";
import {
  ServicesContainer,
  ServicesImg,
  Img,
  CardWrap,
  ServicesCard,
  ServicesDetail,
  ServicesTitle,
  ServicesLine,
  ServicesGallery,
  ServiceImg,
  BtnWrap,
  Btn,
} from "./ServicesElement";
import { services } from "./Data";

const Services = () => {
  const checkOdd = (index) => {
    if (index % 2) {
      console.log("-t-", index % 2);
      return true;
    } else {
      console.log("-f-", index % 2);
      return false;
    }
  };

  return (
    <>
      <ServicesContainer>
        <ServicesImg>
          <Img src={YinYang} />
        </ServicesImg>
        <CardWrap>
          {services.map((card, index) => (
            <ServicesCard key={index} lor={checkOdd(index)}>
              <ServicesDetail>
                <ServicesTitle>{card.name}</ServicesTitle>
                <ServicesLine>{card.line}</ServicesLine>
                <BtnWrap>
                  <Btn to={"/appointment"}>Make an appointment now</Btn>
                </BtnWrap>
              </ServicesDetail>
              <ServicesGallery>
                <ServiceImg src={card.gallery} />
              </ServicesGallery>
            </ServicesCard>
          ))}
        </CardWrap>
      </ServicesContainer>
    </>
  );
};

export default Services;
