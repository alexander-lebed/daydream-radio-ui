import {useContext} from "react";
import { NextPage } from 'next';
import {Mode} from "../../store";
import {RADIO_MODE} from "../../constants";
import {useOnline} from '../../helpers/hooks';
import OfflineWarning from "./OfflineWarning";
import ModeButton from "../ModeButton";
import Player from "../Player";
import {Layout, Text, Title, ModeButtonToolbar, PlayerContainer} from "./styles";


const Home: NextPage = () => {
    const {mode} = useContext(Mode.Context);
    const online = useOnline();
    return (
        <Layout mode={mode}>
            <Text>
                <Title>~ Daydream Radio ~</Title>
                {!online && <OfflineWarning />}
            </Text>
            
            <ModeButtonToolbar>
                <ModeButton mode={RADIO_MODE.NOW} />
                <ModeButton mode={RADIO_MODE.MORNING} />
                <ModeButton mode={RADIO_MODE.DAY} />
                <ModeButton mode={RADIO_MODE.NIGHT} />
            </ModeButtonToolbar>

            <PlayerContainer>
                <Player />
            </PlayerContainer>
        </Layout>
    )
};

export default Home;