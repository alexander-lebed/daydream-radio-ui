import styled from 'styled-components';
import {getColors} from "../../helpers/modeStyle";
import {deviceMediaQuery} from "../../constants";

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

export const Text = styled.div`
    text-align: center;
    
    @media ${deviceMediaQuery.laptop} {
      position: absolute;
      top: 10%;
    }
`;

export const Title = styled.h1`
  font-family: 'Fugaz One', cursive;
`;

export const ModeButtonToolbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    button {
      margin: 0 0 30px 0;
    }
    
    @media ${deviceMediaQuery.laptop} {
      flex-direction: row;
      button {
        margin: 0 40px 0 0;
      }
    }
`;