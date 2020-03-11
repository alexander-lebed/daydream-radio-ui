import {useContext} from "react";
import { NextPage } from 'next';
import Link from 'next/link';
import {Mode} from "../../store";
import {RADIO_MODE} from "../../constants";
import {useOnline} from '../../helpers/hooks';
import OfflineWarning from "./OfflineWarning";
import ModeButton from "../ModeButton";
import {Layout, Text, Title, ModeButtonToolbar} from "./styles";

const Home: NextPage = () => {
    const {mode} = useContext(Mode.Context);
    const online = useOnline();
    return (
        <Layout mode={mode}>
            <Text>
                <Title>~ Daydream Radio ~</Title>
                {!online && <OfflineWarning />}
            </Text>
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