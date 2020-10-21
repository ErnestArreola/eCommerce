import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from "classnames";

//Icons


const IndexNavbar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [navbarColor, setNavbarColor] = React.useState("");

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  document.documentElement.classList.toggle("nav-open");
  };

  return (
       <Navbar  className = {classnames("fixed-top", "")} 
       color-on-scroll = "300" 
       expand = "lg"
       >

         <Container> 

           <div className = "navbar-translate">
           <NavbarBrand
            data-placement="bottom"
            to="/profile-page"
            target="_top"
          >
            Portfolio
          </NavbarBrand>
          <button
          aria-expanded = {collapsed}
          className = {classnames("navbar-toggler navbar-toggler", {
            toggled: collapsed,
          })} 
          onClick = {toggleNavbar}
          >
            <span className = "navbar-toggler-bar bar1"/>
            <span className = "navbar-toggler-bar bar2"/>
            <span className = "navbar-toggler-bar bar3"/>
            
          </button>
          </div>
          <Collapse
          className = "justify-content-end"
          navbar
          isOpen={collapsed}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/"
                  >
                    <i className = "nc-icon nc-book-bookmark" /> Documentation
                  </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}


export default IndexNavbar;