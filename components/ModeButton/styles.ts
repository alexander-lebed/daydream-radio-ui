import styled, {css, keyframes} from 'styled-components';
import {getColors} from "../../helpers/modeStyle";

const rotating = keyframes`
    from {
      transform: scale(1.2) rotate(0deg);
    }
    to {
      transform: scale(1.2) rotate(360deg);
    }
`;

export const Button = styled.button`
    position:relative;
    cursor: pointer;
    height: 4em;
    width: 4em;
    border-radius: 50%;
    border: none;
    outline: none;
    color: ${props => getColors(props.mode).primaryColor};
    transition: 0.3s;
    ${props => props.selected ? css`
        height: 9em;
        width: 9em;
        border: 40px solid black;
        animation: ${rotating} 5s linear infinite;
        box-shadow: 0 0 10px 2px rgba(255,255,255,0.1);
    ` : css`
        :hover {
            transform: scale(1.2) rotate(360deg);
        }
    `}
`;

export const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 4em;
    max-width: 4em;
    transform: translate(-50%, -50%) scale(0.5);
    filter: ${props => getColors(props.mode).cssFilter};
`;