import styled from 'styled-components';
import {getColors} from "../../helpers/modeStyle";

export const Layout = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => getColors(props.mode).primaryColor};
    background-color: ${props => getColors(props.mode).secondaryColor};
    transition: 2s;
`;

export const Title = styled.h1`
    position: absolute;
    top: 10%;
    font-family: 'Yeon Sung', cursive;
`;

export const ModeButtonToolbar = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    button {
      margin: 0 40px;
    }
`;