import { useState } from 'react';

function Creature(props) {
    const [isAwake, setIsAwake] = useState(false);
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    return (
        <div style={style}>
            <button
                type="button"
                onClick={() => setIsAwake(!isAwake)}
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
