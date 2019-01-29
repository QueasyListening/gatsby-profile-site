import React, { Component } from 'React';
import './flower.css'

class Flower extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        window.setTimeout(() => {
            document.getElementsByClassName('flower-container')[0].style.height = this.props.height.toString()+'%';
            document.getElementsByClassName('flower-container')[0].style.bottom = this.props.bottom.toString()+'px';
            document.getElementsByClassName('flower-container')[0].style.left = this.props.left.toString()+'px';
        }, 5);

        window.setTimeout(() => this.grow(), 1000);

    }
    displayFlower = () => {
        const droplets = Array.from(document.getElementsByClassName('droplet'));
       
        droplets.forEach(droplet => {
            droplet.style.height = this.props.flowerSize.toString()+'px';
            droplet.style.width = this.props.flowerSize.toString()+'px';
            droplet.style.animationPlayState = 'running';
        });
    }

    displayLeaves = () => {
        const leaves = Array.from(document.getElementsByClassName('leaf'));
        leaves.forEach( (leaf, i) => {
            leaf.style.transform = 'scale(1)';
            if (i % 2 === 0) {
                leaf.style.left = '-32px';
                leaf.style.bottom = '10px';
            } else {
                leaf.style.left = '8px';
                leaf.style.bottom = '41px';
            }
        });
      
    }

    grow = () => {
        const stemHeight = window.innerHeight * this.props.height * .01 - 64 - 140;
                
        let stems = Array.from(document.getElementsByClassName('stem'));
        stems.forEach(stem => {
            stem.style.height = stemHeight.toString()+'px';
            
        });

        window.setTimeout(this.displayFlower, 1800);
        window.setTimeout(this.displayLeaves, 1500);
    }

    render(){
        return (
            <div className="flower-container">
                <div className="droplet" id="no1"></div>
                <div className="droplet" id="no2"></div>
                <div className="droplet" id="no3"></div>
                <div className="droplet" id="no4"></div>
                <div className="droplet" id="no5"></div>
                <div className="droplet" id="no6"></div>
                <div className="droplet" id="no7"></div>
                <div className="droplet" id="no8"></div>
                <div className="droplet" id="no9"></div>
                <div className="droplet" id="no10"></div>
    
                <div className="stem">
                    <div className="leaf leaf-1"></div>
                    <div className="leaf leaf-2"></div>
                
                </div>
                <div className="pot-outline"></div>
                <div className="pot" onClick={this.grow}></div>
            </div>
        )

    }
}

export default Flower