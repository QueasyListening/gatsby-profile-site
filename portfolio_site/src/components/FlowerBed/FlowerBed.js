import React from 'react';
import Flower from '../Flower/flower'
const FlowerBed = () => {
    for (let i=1; i < 20; i++) {
        let height = Math.random()*80;
        let left = Math.random()*(window.innerWidth-150);
        let bottom = Math.random()*window.innerHeight;
        let flowerSize = Math.random()*200+50; 
        return (
            <Flower height={height} left={left} bottom={bottom} flowerSize={flowerSize}/>
        )
    }
}

export default FlowerBed;