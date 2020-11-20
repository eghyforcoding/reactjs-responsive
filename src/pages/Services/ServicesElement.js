import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Acu from "../../images/services/acupuncture.jpg";

export const ServicesContainer = styled.div`
  display: block;
  text-align: center;
`;

export const ServicesImg = styled.div``;

export const Img = styled.img``;

export const CardWrap = styled.div`
  /* display: grid; */
  /* grid-template-columns: 100%; */
  /* background: blue; */
  /* justify-content: center; */

  /* @media screen and (max-width: 850px) {
    grid-template-columns: 80%;
  } */
`;

export const ServicesCard = styled.div`
  background: pink;
  color: black;
  text-decoration: none;
  font-size: 20px black;
  display: grid;
  grid-template-areas: ${({ lor }) => (lor ? '"col1 col2"' : '"col2 col1"')};
  grid-auto-columns: 50%;
  text-align: ${({ lor }) => (lor ? "right" : "left")};

  @media screen and (max-width: 850px) {
    grid-auto-columns: 100%;
    grid-template-areas: "col2" "col1";
  }
`;

export const ServicesDetail = styled.div`
  width: 100%;
  padding: 40px 20px;
  grid-area: col1;
  /* margin: 5px 5px; */
  /* border: 1px solid #ccc; */
`;

export const ServicesTitle = styled.p`
  font-size: 30px;

  @media screen and (max-width: 850px) {
    font-size: 26px;
  }
`;

export const ServicesLine = styled.p`
  padding-top: 3px;
  font-size: 15px;
`;

export const ServicesGallery = styled.div`
  /* border: 1px solid #ccc; */
  /* margin: 5px 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: col2;
`;

export const ServiceImg = styled.img`
  width: 100%;
  height: auto;

  /* @media screen and (max-width: 800px) {
    width: 70px;
    height: auto;
  } */
`;

export const BtnWrap = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const Btn = styled(LinkR)`
  border-radius: 50px;
  border: 1px solid white;
  color: white;
  /* font-weight: lighter; */
  padding: 14px 48px;
  font-size: 20px;
  background: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: brown;
  }
`;
