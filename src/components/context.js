import React, { createContext, useState, useEffect, Children } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // window.localStorage.removeItem("carts");

  const getcartdata = () => JSON.parse(window.localStorage.getItem("carts"));
  const getsubtotal = () =>
    JSON.parse(window.localStorage.getItem("subtotals"));

  const [carts, setCart] = useState(getcartdata);
  const [subtotals, setSubtotal] = useState(getsubtotal);
  const [addAction, setAddAction] = useState(false);
  const tempCart = carts || [];
  console.log("---cart---", carts);

  //update local storage whenever carts is updated
  //----------------------------------------------
  useEffect(() => {
    console.log("---running effect----");
    console.log("----carts-----", carts);
    localStorage.setItem("carts", JSON.stringify(carts));
    localStorage.setItem("subtotals", JSON.stringify(subtotals));
    setAddAction(false);
  }, [carts, subtotals]);

  const addCart = (newcart) => {
    // setAddAction(true);
    const data = { id: newcart.id, detail: newcart.data(), count: 1 };
    let keyIndex = null;
    if (tempCart !== null) {
      tempCart.map((item, index) => {
        if (String(item.id) === String(newcart.id)) {
          keyIndex = index;
        }
      });
      if (keyIndex !== null) {
        tempCart[keyIndex].count += 1;
      } else {
        tempCart.push(data);
      }
    } else {
      console.log("--temp cart is empty--");
      tempCart.push(data);
    }
    setCart(tempCart);
    calculateTotal();
    alert("Item added into cart!");
  };

  const removeCart = (id) => {
    // tempCart.filter((cart) => cart.id !== id);
    // setCart(carts.filter((cart) => cart.id !== id));
    if (window.confirm("Confirm to delete this product?")) {
      tempCart.map((cart, index) => {
        if (cart.id === id) {
          tempCart.splice(index, 1);
        }
      });
      setCart(tempCart);
      calculateTotal();
    }
  };

  const calculateTotal = () => {
    // setAddAction(true);
    console.log("---running calculating subtotal---");
    let ca = carts;
    let total = 0;
    if (ca !== null) {
      ca.map((item) => {
        total += item.detail.price * item.count;
        console.log("--total inside loop--", total);
      });
    }
    console.log("--total--", total);
    setSubtotal(total);
  };

  const itemPlus = (id) => {
    tempCart.map((cart) => {
      if (cart.id === id) {
        cart.count += 1;
      }
    });
    setCart(tempCart);
    calculateTotal();
  };

  const itemMinus = (id) => {
    tempCart.map((cart) => {
      if (cart.id === id) {
        cart.count -= 1;
      }
    });
    setCart(tempCart);
    calculateTotal();
  };

  return (
    <DataContext.Provider
      value={{ carts, subtotals, addCart, removeCart, itemPlus, itemMinus }}
    >
      {children}
    </DataContext.Provider>
  );
};
