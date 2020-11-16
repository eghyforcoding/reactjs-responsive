import styled from "styled-components";

export const ContactUsContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SectionWrap = styled.div`
  padding: 100px 20%;
  text-align: center;
`;

export const SectionTitle = styled.p`
  font-size: 50px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const SectionTopLine = styled.p`
  margin-top: 20px;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`;
