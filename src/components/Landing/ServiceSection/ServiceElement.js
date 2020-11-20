import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ServiceContainer = styled.div`
  color: #fcfaf7;
  background: #8d847f;
  padding-bottom: 50px;
  text-align: center;
  /* height: 800px; */
`;

export const InfoWrapper = styled.div`
  /* height: 200px; */
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 24px;
  /* background: green; */
`;

export const TitleWrap = styled.div`
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  /* color: black; */
  /* background: black; */
`;

export const Title = styled.h3`
  font-size: 30px;
`;

export const LineWrap = styled.div`
  /* background: blue; */
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
  padding: 10px 0;
`;

export const Line = styled.p``;

export const IconWrap = styled.div`
  /* background: red; */
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 30% 30% 30%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 45% 45%;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 75%;
  }
`;

export const ServiceCard = styled(LinkR)`
  /* background: red; */
  display: table-row;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 0 20px 0;
  text-decoration: none;
  color: #fcfaf7;

  &:hover {
    border: 1px solid white;
  }
`;

export const CardIconWrap = styled.div`
  font-size: 8rem;
`;

export const CardTitle = styled.h3``;

export const CardLine = styled.p`
  padding: 10px;
`;
