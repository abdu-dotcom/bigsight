import styled from "styled-components";

export const NavbarButton = styled.button`
    width: 122px;
    height: 37.75px;
    border-radius: 17px;
    color: ${(props) => props.color || "white"};
    background-color: ${(props) => props.backgroundColor || "white"};
    border: ${(props) => props.border || "black"};
    transition: all 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 13px;
    box-sizing: border-box;
    margin-top: -5px;

    &:hover {
        color: ${(props) => props.hoverColor || "white"};
        background-color: ${(props) => props.hoverBackgroundColor || "white"};
        border: ${(props) => props.hoverBorder || "black"};
    }
`;
