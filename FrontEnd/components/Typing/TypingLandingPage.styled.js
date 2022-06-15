import styled from "styled-components";

export const LandingPageSection1Type = styled.span`
    font-family: "Roboto Flex", sans-serif;
    font-weight: 400;
    font-size: 43px;
    margin-top: 25px;
    text-transform: capitalize;
    color: #0000;
    background: linear-gradient(-90deg, black 3px, #0000 0) calc(${(props) => props.bgLength} * 1px) 0, linear-gradient(black 0 0) 0 0;
    background-size: calc(${(props) => props.length} * 1ch) 200%;
    -webkit-background-clip: padding-box, text;
    background-clip: padding-box, text;
    background-repeat: no-repeat;
    animation: b 1s infinite steps(1), t calc(30 * 0.1s) steps(${(props) => props.length}) forwards;

    @keyframes t {
        from {
            background-size: 0 100%;
        }
    }
    @keyframes b {
        50% {
            background-position: 0 200%, 0 0;
        }
    }
`;
