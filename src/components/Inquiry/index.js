import React, { useState } from "react";
import {
  InquiryContainer,
  InquiryHeading,
  InquiryLine,
  BoxWrap,
  InquiryForm,
  Line,
  InputWrap,
  InputField,
  InputBoxField,
  Btn,
  ContactUsWrap,
  ContactUsLine,
  ContactHeading,
} from "./InquiryElement";

const Inquiry = () => {
  return (
    <InquiryContainer>
      <InquiryHeading>Want to know more about our service?</InquiryHeading>
      <InquiryLine>
        Drop us a message, we will get back to you as soon as possible
      </InquiryLine>
      <BoxWrap>
        <InquiryForm>
          <Line>Let us know what's your concern</Line>
          <InputWrap>
            <InputField placeholder="Your Name" />
          </InputWrap>
          <InputWrap>
            <InputField placeholder="Your Email" />
          </InputWrap>
          <InputWrap>
            <InputField placeholder="Your Phone number" />
          </InputWrap>
          <InputWrap>
            <InputBoxField placeholder="Your message" />
          </InputWrap>
          <InputWrap>
            <Btn>Submit</Btn>
          </InputWrap>
        </InquiryForm>
        <ContactUsWrap>
          <ContactHeading>Contact Us</ContactHeading>
          <ContactUsLine></ContactUsLine>
        </ContactUsWrap>
      </BoxWrap>
    </InquiryContainer>
  );
};

export default Inquiry;
