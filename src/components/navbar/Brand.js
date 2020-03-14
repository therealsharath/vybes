import React from 'react'
import styled from "styled-components";

import logo from "../../vybeslogo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="DJ's Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;