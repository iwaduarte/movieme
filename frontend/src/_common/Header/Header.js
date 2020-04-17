import React from 'react';

// import logo from "../../logo.svg";
import styled from "styled-components";

const HeaderBox = styled.div`
display: flex;
align-items: center;
padding-left: 1vw;
background-color: #121212;
color: #FFF;
min-height: calc(60px + 3vh);
`;
const Logo = styled.div`
font-size: 4rem;
font-family: Bangers;
color: #f5c517;
`;
const MenuBar = styled.div`
display: flex;
flex-grow: 1;
justify-content: space-evenly;
font-size: 1.8rem;
font-family: Arial;
cursor: pointer;
// margin: auto;

`;
const MenuItem = styled.div`
&:hover{
color: #f5c517;
}

`;
const Header = () => <>
    <HeaderBox className="">
        <Logo>
            Movie Me
        </Logo>
        <MenuBar>
            <MenuItem> Recommendations</MenuItem>
            <MenuItem> Liked</MenuItem>
            <MenuItem> Not Liked</MenuItem>
        </MenuBar>
    </HeaderBox>
</>;


export default Header;