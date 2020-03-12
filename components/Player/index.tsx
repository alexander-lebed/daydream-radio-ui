import React, { useContext } from 'react';
import { Mode } from '../../store';

const Player = () => {
    const {mode} = useContext(Mode.Context);
    if (!mode) {
        return null;
    }
    const source = 'http://localhost:3000/api/stream?mode=' + mode.toLowerCase();
    const onAction = (eventAction: string) => {
        console.log(eventAction);
    }
    return (
        <div>
            <audio
                autoPlay
                onPlay={() => onAction('onPlay')}
                onPause={() => onAction('onPause')}
                onEnded={() => onAction('onEnded')}
                onTimeUpdate={() => {}}
                onVolumeChange={() => onAction('onVolumeChange')}
            >
                <source src={source} type="audio/ogg; codecs=opus"/>
                <source src={source} type="audio/ogg; codecs=vorbis"/>
                <source src={source} type="audio/mpeg" />
                Your browser does not support audio tag.
            </audio>
        </div>
    );
};

export default Player;