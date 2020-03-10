import {useContext} from "react";
import { NextPage } from 'next';
import Link from 'next/link'
import {Mode} from "../../store";
import {RADIO_MODE} from "../../constants";
import ModeButton from "../ModeButton";
import {Layout, Title, ModeButtonToolbar} from "./styles";

const Home: NextPage = () => {
    const {mode} = useContext(Mode.Context);
    return (
        <Layout mode={mode}>
            <Title>~ Daydream Radio ~</Title>
            {/* 
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
            <Link href="/fallback">
                <a>FALLBACK PAGE</a>
            </Link>
            <h3>{process.env.NODE_ENV}</h3> 
            */}
            <ModeButtonToolbar>
                <ModeButton mode={RADIO_MODE.NOW} />
                <ModeButton mode={RADIO_MODE.MORNING} />
                <ModeButton mode={RADIO_MODE.DAY} />
                <ModeButton mode={RADIO_MODE.NIGHT} />
            </ModeButtonToolbar>
        </Layout>
    )
};

export default Home;