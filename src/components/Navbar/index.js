import React, { useContext } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
  IconWrapper,
  IconItem,
  CartCount,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { DataContext } from "../../components/context";

const Navbar = ({ toggle, cartIncrement, cartCount }) => {
  // const contextType = DataContext;

  const { carts, totalAmount, addCart, removeCart } = useContext(DataContext);

  // console.log("carts---", carts.length);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Holistic Balance</NavLogo>
          <MobileIcon>
            <IconWrapper>
              <IconItem>
                <NavBtnLink to="cart">
                  <TiShoppingCart />
                  <CartCount>{carts === null ? 0 : carts.length}</CartCount>
                </NavBtnLink>
              </IconItem>
              <IconItem onClick={toggle}>
                <FaBars />
              </IconItem>
            </IconWrapper>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavBtnLink to="/">Home</NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink to="/shop">Shop</NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink to="/blog">Blog</NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink to="/services">Services</NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink to="/contactus">Contact us</NavBtnLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/cart">
              <TiShoppingCart />
              <CartCount>{carts === null ? 0 : carts.length}</CartCount>
            </NavBtnLink>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
