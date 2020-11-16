import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterGIT,
} from "../Footer/FooterElement";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Menu</FooterLinkTitle>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/aboutus">About Us</FooterLink>
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/treatment">Treatment</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/contactus">Contact Us</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Get in touch</FooterLinkTitle>
                <FooterGIT>About Us</FooterGIT>
                <FooterGIT>About Us</FooterGIT>
                <FooterGIT>About Us</FooterGIT>
                <FooterGIT>About Us</FooterGIT>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Help</FooterLinkTitle>
                <FooterLink to="/faq">FAQs</FooterLink>
                <FooterLink to="/shipping-returns">
                  Shipping and Returns
                </FooterLink>
                <FooterLink to="/privacy-policy">Privacy Policies</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
