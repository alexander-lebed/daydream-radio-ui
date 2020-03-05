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
        <>
            <Head>
                <title>Daydream Radio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fugaz+One&display=swap" />
                <link rel="manifest" href="/manifest.json" />
                {/* iOS support */}
                <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
                <meta name="apple-mobile-web-app-status-bar" content="#1f1f1f" />
            </Head>
            <GlobalStyle />
            <Store>
                <Component {...pageProps} />
            </Store>
        </>
    )
}

export default MyApp;