import Head from 'next/head'
import { createGlobalStyle } from 'styled-components';
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
        <>
            <Head>
                <title>Daydream Radio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fugaz+One&display=swap" />
                <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                {/* iOS support */}
                <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
                <meta name="apple-mobile-web-app-status-bar" content="#1f1f1f" />
                {/* theme color for address bar */}
                <meta name="theme-color" content="#1f1f1f"></meta>
            </Head>
            <GlobalStyle />
            <Store>
                <Component {...pageProps} />
            </Store>
        </>
    )
}

export default MyApp;