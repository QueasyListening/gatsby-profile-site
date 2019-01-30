import React from 'react'
import { Link, navigate } from 'gatsby'
import './index.css'

import Flower from '../components/Flower/flower.js';
import FlowerBed from '../components/FlowerBed/FlowerBed';

const plantFlowers = () => {
    let flowerBed = [];
    let height, left, bottom, flowerSize;
    for (let i=1; i < 20; i++) {
        height = Math.floor(Math.random()*80);
        left = Math.floor(Math.random()*(window.innerWidth-150));
        bottom = Math.floor(Math.random()*window.innerHeight);
        flowerSize = Math.floor(Math.random()*200+50);
        flowerBed.push(<Flower height={height} left={left} bottom={bottom} flowerSize={flowerSize} key={i}/>);
    }
    console.log(flowerBed);
    return flowerBed;
}

const IndexPage = () => (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div className='width-100-container'>
            {/* <Flower height={85} flowerSize={100} bottom={150} left={150}/> */}
            {plantFlowers().map(flower => flower)}
        </div>
        <button className='start-btn' onClick={ () => navigate('/main-page')} role='link'>Let's get Started!</button>
    </div>
)

export default IndexPage