import styled, {css, keyframes} from 'styled-components';
import {getColors} from "../../helpers/modeStyle";
import { deviceMediaQuery } from '../../constants';

const rotating = keyframes`
    from {
      transform: scale(1.2) rotate(0deg);
    }
    to {
      transform: scale(1.2) rotate(360deg);
    }
`;

export const Button = styled.button`
    position: relative;
    cursor: pointer;
    height: 4.2em;
    width: 4.2em;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${props => getColors(props.mode).primaryColor};
    outline: none;
    background-color: #1f1f1f; /* #f8f8f8; */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    transition: 0.3s;
    ${props => props.selected ? css`
        height: 9em;
        width: 9em;
        border: 40px solid #000000;
        background-color: #f8f8f8;
        animation: ${rotating} 5s linear infinite;
        box-shadow: 0 0 10px 2px rgba(255,255,255,0.1);
    ` : css`
        :hover {
            transform: scale(1.2);
        }
        @media ${deviceMediaQuery.laptop} {
            :hover {
                transform: scale(1.2) rotate(360deg);
            }
        } 
    `}
`;

export const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    max-height: 4em;
    max-width: 4em;

    ${props => props.selected ? css`
        filter: none;
    ` : css`
        filter: ${props => getColors(props.mode).cssFilter};
    `}
`;