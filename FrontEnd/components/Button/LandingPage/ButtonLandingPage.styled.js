import styled from "styled-components";

export const LandingPageSection1Button = styled.button`
    max-width: 321px;
    width: 100vw;
    height: 47px;
    background-color: #ee2e24;
    border-radius: 65px;
    border: 1px solid transparent;
    color: white;
    font-family: "Roboto Flex", sans-serif;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.5px;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: #ee2e24;
        border: 1px solid #ee2e24;
        background-color: transparent;
        transform: scale(1.05);
    }
    
    @media (max-width: 992px) {
        &:hover {
            color: white;
            border: 1px solid transparent;
            background-color: #ee2e24;
            transform: scale(1.05);
        }
    }
    @media (max-width: 556px) {
        margin-top: 0px;
        transform: scale(0.8);
        &:hover {
            color: white;
            border: 1px solid transparent;
            background-color: #ee2e24;
            transform: scale(0.9);
        }
    }
`;
