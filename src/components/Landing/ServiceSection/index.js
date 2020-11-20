import React from "react";
import { AiFillCodepenCircle } from "react-icons/ai";
import { services } from "./Data";
import {
  ServiceContainer,
  InfoWrapper,
  TitleWrap,
  Title,
  LineWrap,
  Line,
  IconWrap,
  ServiceCard,
  CardTitle,
  CardIconWrap,
  CardLine,
} from "./ServiceElement";

const ServiceSection = () => {
  return (
    <>
      <ServiceContainer>
        <InfoWrapper>
          <TitleWrap>
            <Title>Traditional treatment</Title>
          </TitleWrap>
          <LineWrap>
            <Line>
              Discover the traditional treatment that could improve your health
              and life.
            </Line>
          </LineWrap>
        </InfoWrapper>
        <IconWrap>
          {services.map((item, index) => (
            <ServiceCard to="/services">
              <CardIconWrap>
                <AiFillCodepenCircle />
              </CardIconWrap>
              <CardTitle>{item.name}</CardTitle>
              {/* <CardLine>{item.line}</CardLine> */}
            </ServiceCard>
          ))}
        </IconWrap>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
