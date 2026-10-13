import { useState } from 'react';

function Creature(props) {
    const [isAwake, setIsAwake] = useState(false);
    const [position, setPosition] = useState({ x: props.x, y: props.y });

    const handleClick = () => {
        const nextIsAwake = !isAwake;
        setIsAwake(nextIsAwake);
        props.onAwakeChange(nextIsAwake);

        if (nextIsAwake) {
            setPosition({
                x: Math.floor(Math.random() * 680),
                y: Math.floor(Math.random() * 680)
            });
        }
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
                aria-label={`${isAwake ? 'Put' : 'Wake'} ${props.name} ${isAwake ? 'to sleep' : 'up'}`}
                style={{
                    border: 0,
                    padding: 0,
                    background: 'transparent',
                    cursor: 'pointer'
                }}
            >
                <img
                    src={isAwake ? props.awakeImageUrl : props.sleepImageUrl}
                    alt={props.name}
                    width="120"
                />
            </button>
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
