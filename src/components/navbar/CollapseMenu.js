import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <Link to="home" spy={true} smooth={true} duration={500}><a  onClick={props.handleNavbar}>Home</a></Link>
          <Link to="music" spy={true} smooth={true} duration={500}><a  onClick={props.handleNavbar}>Music</a></Link>
          <Link to="contact" spy={true} smooth={true} duration={500}><a  onClick={props.handleNavbar}>Contact</a></Link>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: rgb(41,43,44, 0.75);
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  height: 95vh;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10vh;
  padding-top: 10vh;
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    font-family: 'Sen', sans-serif;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #d9534f;
    }
  }
`;

