import {useContext} from 'react';
import {Mode} from "../../store";
import {getSvgSrc} from "../../helpers/modeStyle";
import {Button, Icon} from "./styles";
import {RadioMode} from "../../types";

interface Props {
    mode: RadioMode
}

const ModeButton = (props: Props) => {
    const {mode: selectedMode, setMode} = useContext(Mode.Context);

    const onClick = () => {
        const mode = props.mode === selectedMode ? null : props.mode;
        setMode(mode);
    }
    
    return (
        <Button
            mode={props.mode}
            selected={props.mode === selectedMode}
            onClick={onClick}
        >
            <Icon
                mode={props.mode}
                alt={props.mode}
                src={getSvgSrc(props.mode)}
            />
        </Button>
    );
};

export default ModeButton;