import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  border-top: 1px solid #eac677;
  background-color: #fcfaf7;
`;

export const FooterWrap = styled.div`
  padding: 48px, 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #5d3f03;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #5d3f03;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #4d4432;
    transition: 0.3s ease-out;
  }
`;

export const FooterGIT = styled.p`
  color: #5d3f03;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;
