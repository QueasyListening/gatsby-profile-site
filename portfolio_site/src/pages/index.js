import React from 'react'
import { Link, navigate } from 'gatsby'
import './index.css'

import Flower from '../components/Flower/flower.js';

const IndexPage = () => (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div className='width-100-container'>
            <Flower />
        </div>
        <button className='start-btn' onClick={ () => navigate('/main-page')} role='link'>Let's get Started!</button>
    </div>
)

export default IndexPage