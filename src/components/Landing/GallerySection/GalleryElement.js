import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 850px) {
    height: 400px;
  }
`;

export const GalleryBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const GalleryContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryTitle = styled.h1`
  color: #f3f3f3;
  font-size: 48px;
  text-align: center;
  /* font-weight: lighter; */

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const GalleryLine = styled.p`
  margin-top: 24px;
  color: #f3f3f3;
  font-size: 24px;
  /* font-weight: lighter; */
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const GalleryBtnWrap = styled.div`
  margin-top: 32px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
`;

export const BtnLink = styled(LinkR)`
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
