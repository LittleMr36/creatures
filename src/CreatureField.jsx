import { useState } from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
    const [awakeCreatureIds, setAwakeCreatureIds] = useState(() => new Set());
    const creatureData =[
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ];
    const totalCreatures = creatureData.length;
    const awakeCount = awakeCreatureIds.size;
    const isAllAwake = awakeCount === totalCreatures;
    const isAllAsleep = awakeCount === 0;
    const fieldBackgroundColor = isAllAwake ? '#d8f3b2' : isAllAsleep ? '#4b6b7a' : '#6b8c66';

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: fieldBackgroundColor
    };

    return (
        <div style={fieldStyle}>
            <p
                aria-live="polite"
                style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    zIndex: 1,
                    margin: 0,
                    padding: '6px 10px',
                    backgroundColor: 'white'
                }}
            >
                {awakeCount} of {totalCreatures} creatures awake
            </p>
            <button
                type="button"
                onClick={() => {
                    if (isAllAwake) {
                        setAwakeCreatureIds(new Set());
                        return;
                    }
                    setAwakeCreatureIds(new Set(creatureData.map(creature => creature.id)));
                }}
                style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    zIndex: 1,
                    padding: '6px 10px',
                    cursor: 'pointer'
                }}
            >
                {isAllAwake ? 'Let All Sleep' : 'Wake All'}
            </button>
            {creatureData.map(creature => (
                <Creature
                    key={creature.id}
                    isAwake={awakeCreatureIds.has(creature.id)}
                    name={creature.name}
                    age={creature.age}
                    sleepImageUrl={creature.sleepImageUrl}
                    awakeImageUrl={creature.awakeImageUrl}
                    x={creature.x} y={creature.y}
                    onAwakeChange={(isAwake) => {
                        setAwakeCreatureIds((previousIds) => {
                            const nextIds = new Set(previousIds);
                            if (isAwake) {
                                nextIds.add(creature.id);
                            } else {
                                nextIds.delete(creature.id);
                            }
                            return nextIds;
                        });
                    }}
                />
            ))} 
        </div>
    );
}

export default CreatureField;
