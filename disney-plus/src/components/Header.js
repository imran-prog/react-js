import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Components
import HeaderMenu from './HeaderMenu';

const Header = (props) => {
    return (
        <Navbar>
            <Logo>
                <img src='/images/logo.svg' alt='Disney+' />
            </Logo>
            <HeaderMenu />
            <Login>Login</Login>
        </Navbar>
    )
}

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
    }
`


export default Header