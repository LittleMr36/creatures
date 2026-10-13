import { useEffect, useRef, useState } from 'react';

function Creature(props) {
    const [position, setPosition] = useState({ x: props.x, y: props.y });
    const wasAwake = useRef(props.isAwake);

    useEffect(() => {
        if (!wasAwake.current && props.isAwake) {
            setPosition({
                x: Math.floor(Math.random() * 680),
                y: Math.floor(Math.random() * 680)
            });
        }

        wasAwake.current = props.isAwake;
    }, [props.isAwake]);

    const handleClick = () => {
        props.onAwakeChange(!props.isAwake);
    };

    const style = {
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        <div style={style}>
            <button
                type="button"
                onClick={handleClick}
                aria-label={`${props.isAwake ? 'Put' : 'Wake'} ${props.name} ${props.isAwake ? 'to sleep' : 'up'}`}
                style={{
                    border: 0,
                    padding: 0,
                    background: 'transparent',
                    cursor: 'pointer'
                }}
            >
                <img
                    src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl}
                    alt={props.name}
                    width="120"
                />
            </button>
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
