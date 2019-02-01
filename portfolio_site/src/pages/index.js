import React from 'react'
import { Link, navigate } from 'gatsby'
import './index.css'

import Flower from '../components/Flower/flower.js';
let startBtn = React.createRef();
const plantFlowers = () => {
    const colors = [
        ['goldenrod', 'orangered'],
        ['violet', 'purple'],
        ['navy', 'aqua'],
        ['mediumvioletred', 'palevioletred'],
        ['coral', 'lemonchiffon'],
        ['crimson', 'salmon'],
        ['midnightblue', 'powderblue'],
        ['steelblue', 'deepskyblue'],
        ['aquamarine', 'turquoise']
    ];

    let flowerBed = [];
    
    let height, flowerSize, delay;

    let i = -75;
    for (let j = 1; j >= 0; j--) {
        while(i+200 <= window.innerWidth) {
            let colorSet = colors[Math.floor(Math.random()*(colors.length-1))];
            height = Math.floor(Math.random()*50+50);
            flowerSize = Math.floor(Math.random()*100+50);
            delay = Math.floor(Math.random() * 3000);
            let flowerRef = React.createRef();
            flowerBed.push(<Flower ref={flowerRef} height={height} left={i} bottom={j*150} flowerSize={flowerSize} colorSet={colorSet} delay={delay} key={i}/>);
            i += 150;
        }
        i = 0;
    }
    return flowerBed;
}

const flowerBed = plantFlowers();

const start = () => {
    startBtn.current.style.zIndex = '-1';
    startBtn.current.style.opacity = '0';
    flowerBed.forEach(flower => {
        flower.ref.current.grow();
    });

    window.setTimeout(() => {
        navigate('/main-page/');
    }, 15000);
}

const IndexPage = () => {
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className='width-100-container'>
                {flowerBed.map(flower => flower)}
            </div>
            <button className='start-btn' ref={startBtn} onClick={start}>Here we go</button>
        </div>
    )

}

export default IndexPage