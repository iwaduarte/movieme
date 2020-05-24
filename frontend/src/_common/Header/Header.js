import React from 'react';

// import logo from "../../logo.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderBox = styled.div`
display: flex;
align-items: center;
padding-left: 1.5vw;
background-color: #121212;
color: #FFF;
min-height: calc(60px + 3vh);
`;
const Logo = styled.div`
flex-shrink: 0;
font-size: calc(3rem + 1vw);
font-family: Bangers;
color: #f5c517;
`;
const MenuBar = styled.div`
display: flex;
flex-grow: 1;
justify-content: space-evenly;
align-self: center;
font-size: 1.8rem;
font-family: Arial;
cursor: pointer;
// margin: auto;

`;
const MenuItem = styled.div`
display:flex;
flex-wrap: wrap;
margin: 2%;
font-size: calc(0.4rem + 1.4vw);
&:hover{
color: #f5c517;
}
`;
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`;

const Header = () => <>
    <HeaderBox className="">
        <Logo>
            <StyledLink to="/"> Movie Me </StyledLink>
        </Logo>
        <MenuBar>
            <MenuItem>
                <StyledLink to="/"> Recommendations </StyledLink>
            </MenuItem>
            <MenuItem>
                <StyledLink to="watched">Watched</StyledLink>
            </MenuItem>
            <MenuItem>
                <StyledLink to="quiz">Quiz</StyledLink>
            </MenuItem>
        </MenuBar>
    </HeaderBox>
</>;


export default Header;