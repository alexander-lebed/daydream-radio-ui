import styled from 'styled-components';
import { deviceMediaQuery } from '../../constants';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background: url('/images/space-mobile.jpg') no-repeat center center fixed;
    background-size: cover;
    background-color: #02020c;

    @media ${deviceMediaQuery.laptop} {
        flex-direction: column;
        background: url('/images/space-desktop.jpg') no-repeat center center fixed;
        background-color: #030003;
    }
`;

export const MessageText = styled.h3`
    margin: 2em;
    text-align: center;
    color: orangered;
    font-family: Courier New;
`;

export const HomeLink = styled.a`
    color: ghostwhite;
    font-family: Arial;
`;

