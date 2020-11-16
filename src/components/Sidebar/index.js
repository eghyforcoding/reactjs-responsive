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
          <SidebarLink to="aboutus" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarRoute to="/shop" onClick={toggle}>
            Shop
          </SidebarRoute>
          <SidebarRoute to="/treatment" onClick={toggle}>
            Treatment
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
