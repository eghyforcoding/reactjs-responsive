import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../components/context";
import { myFirestore } from "../../firebase_config";
import {
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import {
  CartContainer,
  CardWrap,
  CartCard,
  ContainWrap,
  ImgWrap,
  ItemImg,
  ItemTitle,
  ItemPrice,
  BtnWrap,
  PlusMinusBtn,
  ItemCount,
  SubtotalWrap,
  Subtotal,
  CheckoutBtn,
  ItemTotalCount,
  TitleRow,
  EmptyCart,
  DeleteButton,
} from "./cartElement";

const Cart = () => {
  const { carts, subtotals, removeCart, itemPlus, itemMinus } = useContext(
    DataContext
  );

  console.log("checking", carts);

  return (
    <>
      {carts !== null ? (
        <CartContainer>
          <CardWrap>
            {carts.map((cart, index) => (
              <CartCard key={index}>
                <DeleteButton
                  onClick={() => {
                    removeCart(cart.id);
                  }}
                >
                  <AiFillDelete />
                </DeleteButton>
                <ImgWrap>
                  <ItemImg src={cart.detail.gallery} />
                </ImgWrap>
                <ContainWrap>
                  <TitleRow>
                    <ItemTitle>{cart.detail.name}</ItemTitle>
                    <ItemTotalCount>
                      RM{cart.count * cart.detail.price}
                    </ItemTotalCount>
                  </TitleRow>
                  <ItemPrice>RM: {cart.detail.price}</ItemPrice>
                  <BtnWrap>
                    <PlusMinusBtn onClick={() => itemMinus(cart.id)}>
                      <AiOutlineMinusCircle />
                    </PlusMinusBtn>
                    <ItemCount>{cart.count}</ItemCount>
                    <PlusMinusBtn onClick={() => itemPlus(cart.id)}>
                      <AiOutlinePlusCircle />
                    </PlusMinusBtn>
                  </BtnWrap>
                </ContainWrap>
              </CartCard>
            ))}
          </CardWrap>
          <SubtotalWrap>
            <Subtotal>Subtotal: RM {subtotals}</Subtotal>
            <CheckoutBtn></CheckoutBtn>
          </SubtotalWrap>
        </CartContainer>
      ) : (
        <EmptyCart>Cart is empty!</EmptyCart>
      )}
    </>
  );
};

export default Cart;
