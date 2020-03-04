import {useContext} from "react";
import { NextPage } from 'next'
import {Mode} from "../../store";
import {RADIO_MODE} from "../../constants";
import ModeButton from "../../components/ModeButton";
import {Layout, Title, ModeButtonToolbar} from "./styles";

const Home: NextPage = () => {
    const {mode} = useContext(Mode.Context);
    return (
        <Layout mode={mode}>
            <Title>~ Daydream Radio ~</Title>
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