import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  min-width: 300px;
  min-height: 400px;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 10px;
  box-shadow: 2px 8px 20px #ddd;
  margin: 10px;
  transition: 0.5s linear;
`;

export const ContainWrap = styled.div``;

export const CardImg = styled.img`
  max-width: 300px;
  width: auto;
  height: auto;
  max-height: 300px;
  display: block;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  text-transform: uppercase;
  margin: 10px 0;
`;

export const CardPrice = styled.span`
  color: crimson;
`;

export const CardBtn = styled.div``;

export const Btn = styled.button`
  border: 1px solid red;
  outline: none;
  background: white;
  color: red;
  width: 100%;
  height: 40px;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 15px 0;

  &:hover {
    background: red;
    color: white;
    transition: 0.5s;
  }
`;
