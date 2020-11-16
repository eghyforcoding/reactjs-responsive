import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../components/context";
import { myFirestore } from "../../firebase_config";
import {
  ProductContainer,
  ProductCard,
  ContainWrap,
  CardImg,
  CardTitle,
  CardPrice,
  CardBtn,
  Btn,
} from "./productElement";

const Product = () => {
  const { addCart } = useContext(DataContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("--use effect, fetch data--");
      const data = await myFirestore.collection("products").get();
      setProducts(data.docs.map((doc) => doc));
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductContainer>
        {products.map((item, index) => (
          <ProductCard key={index}>
            <ContainWrap>
              <CardImg src={item.data().gallery} />
              <CardTitle>{item.data().name}</CardTitle>
              <CardPrice>RM{item.data().price}</CardPrice>
              <CardBtn>
                <Btn onClick={() => addCart(item)}>Add to cart</Btn>
              </CardBtn>
            </ContainWrap>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
};

export default Product;
