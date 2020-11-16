import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  /* align-items: center; */
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    padding: 0 0;
    /* grid-template-areas: "col1 col1" "col2 col2"; */
    grid-template-areas: "col1" "col2";
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto;
  /* grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2"; */
  padding: 10px;
`;

export const CartCard = styled.div`
  display: grid;
  grid-column-gap: 20px;
  /* grid-template-columns: auto auto auto; */
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2 col3";
  padding: 10px;
  /* background: brown; */
  justify-content: center;
  width: 700px;
  margin-left: 300px;
  border-bottom: 1px solid black;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2" "col3";
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  /* background: green; */
`;

export const ItemImg = styled.img`
  max-width: 300px;
  width: auto;
  height: auto;
  max-height: 300px;
  display: block;
  object-fit: cover;
`;

export const ContainWrap = styled.div`
  /* display: flex;
    justify-content: left; */
  width: 300px;
  /* background: orange; */
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ItemTitle = styled.h3`
  text-transform: uppercase;
  margin: 10px 0;
`;

export const ItemTotalCount = styled.span`
  color: crimson;
  margin: 10px 0;
`;

export const ItemPrice = styled.span`
  color: crimson;
  padding: 10px 0;
`;

export const BtnWrap = styled.div`
  /* width: 90px;
  height: 90px; */
  /* background: red; */
  margin: 10px 0;
`;

export const PlusMinusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: crimson;
  }
`;

export const ItemCount = styled.span`
  width: 30px;
  height: 30px;
  padding: 0 10px;
`;

export const SubtotalWrap = styled.div`
  padding: 10px 5px;
  margin: 20px 5px;
  height: 300px;
  border-left: 1px solid black;

  @media screen and (max-width: 768px) {
    border-top: 1px solid black;
  }
`;

export const Subtotal = styled.h3``;

export const CheckoutBtn = styled.button``;

export const ItemTotal = styled.div``;

export const Total = styled.span``;

export const EmptyCart = styled.h2`
  text-align: center;
  padding: 20px 0;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 50px 0;
  border: none;
  background: none;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: crimson;
  }
`;
