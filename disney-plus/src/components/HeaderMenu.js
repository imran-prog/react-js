import React from 'react'
import styled from 'styled-components';

const HeaderMenu = (props) => {
    return (
        <NavMenu>
                <a href='/home'>
                    <img src='/images/home-icon.svg' alt='home-icon' />
                    <span>Home</span>
                </a>
                <a href='/search'>
                    <img src='/images/search-icon.svg' alt='search-icon' />
                    <span>Search</span>
                </a>
                <a href='/watchlist'>
                    <img src='/images/watchlist-icon.svg' alt='watchlist-icon' />
                    <span>Watchlist</span>
                </a>
                <a href='/originals'>
                    <img src='/images/original-icon.svg' alt='originals-icon' />
                    <span>Originals</span>
                </a>
                <a href='/movies'>
                    <img src='/images/movie-icon.svg' alt='movies-icon' />
                    <span>Movies</span>
                </a>
                <a href='/series'>
                    <img src='/images/series-icon.svg' alt='series-icon' />
                    <span>Series</span>
                </a>
            </NavMenu>
    )
}

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-transform: uppercase;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
            margin-right: 5px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
                left: 0;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px) {
        /* display: none; */
    }
`

export default HeaderMenu