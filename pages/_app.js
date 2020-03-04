import { Container } from 'next/app';
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Store from '../store';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    body > div:first-child,
    div#__next {
        height: 100%;
        margin: 0;
    }
`;

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Head>
                <title>Daydream Radio</title>
                <link href="https://fonts.googleapis.com/css?family=Fugaz+One&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Store>
                <Component {...pageProps} />
            </Store>
        </Container>
    )
}

export default MyApp;