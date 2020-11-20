import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarBtn,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to="/" onClick={toggle}>
            Home
          </SidebarRoute>
          <SidebarRoute to="/shop" onClick={toggle}>
            Shop
          </SidebarRoute>
          <SidebarRoute to="/blog" onClick={toggle}>
            Blog
          </SidebarRoute>
          <SidebarRoute to="/services" onClick={toggle}>
            Services
          </SidebarRoute>
          <SidebarRoute to="/contactus" onClick={toggle}>
            Contact Us
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarBtn to="/signin">Sign In</SidebarBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
