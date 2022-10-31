import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    width: 90%;
    height: 78x;
    background-color: #000;
    color: #f5f2e7;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    position: fixed;
    
          *,
          *:before,
          *:after{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }


        @media screen and (max-width: 960px){
            width: 100%;
        }

        @media screen and (max-width: 480px){
            width: 100%;
        }

`;

export const Wrapper = styled.div`

    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    overflow: hidden;

`;

export const LogoContainer = styled.div`

    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;

    p{

        &:nth-child(2){
            color: #fff;
        
        }
        &:nth-child(3){
            font-size: 1.5rem;
            font-weight: 500;
            color: #e07924;
        
        }
    }
    svg {
        fill: #e07924;
        margin-right: 0.5rem;
    }

`;

export const Menu = styled.ul`

    height: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;

    @media screen and (max-width: 960px){
        
        position: absolute;
        background-color:  #000;
        top: 67px;
        right: ${({ open }) => open ? "-65%" : "-100%"};
        width: 100%;
        height: 95vh;
        justify-content: flex-start;
        flex-direction: column;
        transition: 0.5s all ease;
        overflow: hidden;
    }

    @media screen and (max-width: 730px){
        
        right: ${({ open }) => open ? "-55%" : "-100%"};
    }
    
    @media screen and (max-width: 530px){
        
        right: ${({ open }) => open ? "-50%" : "-100%"};
    }

    @media screen and (max-width: 480px){
        
        position: absolute;
        background-color:  rgba(0, 0, 0, 0.963);
        top: 67px;
        right: ${({ open }) => open ? "0" : "-100%"};
        width: 100%;
        height: 95vh;
        justify-content: center;
        flex-direction: column;
        transition: 0.5s all ease;
        overflow: hidden;
    }

`;

export const MenuItem = styled.li`

    height: 100%;
    letter-spacing: 2px;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: #0087e2 solid 1px;
    }
    
    @media screen and (max-width: 480px){
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: #0087e2 solid 1px;
    }
`;

export const MenuItemLink = styled(NavLink)`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.7rem 2rem 0.5rem 2.7rem;
    color: #fff;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s all ease;
    text-decoration: none;
    line-height: 3rem; 
    position: relative;


    &:hover {

        color: #0087e2;

    }

    &:active {
        color: #03bbdb;
      }

    &:after{
        content: "";
        border-radius: 10px;
        position: absolute;
        background: #0087e2;
        height: 0.175rem;
        left: 23%;
        bottom: 16px;
        width: 60%;
        transform: scale(0, 1);
        transition: transform 0.4s ease;
    }

    &:hover::after{

        transform: scale(1, 1);
    }

    &:active::after{

        background: #03bbdb;

    }

    div{

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 17px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            letter-spacing: 2px;
        }
        svg{
            display: none;
            fill: #fff;
            margin-right: 0.9rem;
        }
    }

    @media screen and (max-width: 960px){

        widht: 100%;

        div{ 
            
            justify-content: left;
        }

        div svg{

        width: 30%;
        display:flex;

        }
    }

    @media screen and (max-width: 480px){

            widht: 100%;
        
        div{        
            justify-content: left;
        }

        div svg{
            width: 30%;
            display:flex;

        }
    }

`;

export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 960px){

        display: flex;
        align-items: center;
        cursor:pointer;
        
        
        svg {
            fill: #fff;
            margin-right: 0.5rem;
            
        }
    }

    @media screen and (max-width: 480px){

        display: flex;
        align-items: center;
        cursor:pointer;
        
        svg {
            fill: #fff;
            margin-right: 0.5rem;
            
        }
    }

`;