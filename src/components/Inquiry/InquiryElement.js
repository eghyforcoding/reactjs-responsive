import styled from "styled-components";

export const InquiryContainer = styled.div`
  background: #8d847f;
  /* display: grid;
  grid-template-columns: auto auto; */
`;

export const InquiryHeading = styled.h1`
  padding: 30px;
  text-align: center;
`;

export const InquiryLine = styled.p`
  text-align: center;
`;

export const BoxWrap = styled.div`
  padding: 50px 15% 20px 15%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const InquiryForm = styled.form`
  background-color: #fcfaf7;
`;

export const Line = styled.p`
  text-align: center;
  font-size: 26px;
  padding: 20px 10px;
`;

export const InputWrap = styled.div`
  display: block;
  margin-left: 20px;
`;

export const InputField = styled.input`
  border: 1px solid black;
  height: 50px;
  width: 250px;
  background: white;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  border-radius: 50px;
  border: 1px solid black;
  /* color: white; */
  /* font-weight: lighter; */
  padding: 14px 48px;
  margin-bottom: 30px;
  font-size: 20px;
  background: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: brown;
  }
`;

export const InputBoxField = styled.textarea`
  border: 1px solid black;
  height: 100px;
  width: 300px;
  background: white;
  margin-bottom: 10px;
`;

export const ContactUsWrap = styled.div`
  background: #fcfaf7;
`;

export const ContactHeading = styled.h3`
  padding: 20px;
  text-align: center;
`;

export const ContactUsLine = styled.p``;
