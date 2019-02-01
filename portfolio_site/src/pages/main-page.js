import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './main-page.css';
import '../Fonts/Sanra Carla Font/stylesheet.css';
import Flower from '../components/Flower/flower';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import selfPic from '../images/self_pic_circle.png';
import resume from '../../public/resume/Josh Coyne Resume.pdf';

let pageNumber = 0;

const MainPage = () => {
    const jumboBubbles = document.getElementsByClassName('jumbo-bubble');
    const pageTitles = document.getElementsByClassName('page-title');

    const changePage = (newPageNumber) => {
        if (newPageNumber >= pageTitles.length)
            newPageNumber = 0;
        jumboBubbles[pageNumber].style.animation = 'shrink 1s ease-out forwards';
        pageTitles[pageNumber].style.transform = 'translateX(-2000px)';
        window.setTimeout(() => {
            pageTitles[pageNumber].style.transform = 'translateX(3000px)';
            pageTitles[pageNumber].style.opacity = '0';
            pageNumber = newPageNumber;
        }, 1000);

        jumboBubbles[newPageNumber].style.visibility = 'visible';
        jumboBubbles[newPageNumber].style.transform = 'scale(.01)';
        jumboBubbles[newPageNumber].style.animation = 'bubble-grow .5s ease-out 1s forwards';
        pageTitles[newPageNumber].style.transform = 'translateX(0px)';
        pageTitles[newPageNumber].style.opacity = '1';
        
    }
    
    return (    
        <div className='main-page-container'>
            <Navbar changePage={changePage}/>
            <Flower height={85} flowerSize={75} bottom={141} left={-42} growOnPageLoad={true} colorSet={['orangered','goldenrod']}/>
            
            <h1 className='page-title page-title-intro'><div className='trapezoid'></div>Introduction</h1>
            <div className='jumbo-bubble first-bubble '>
                <div className='bubble-header'>
                    <h2 className='bubble-title'>Josh Coyne - Software Developer</h2>
                    <img className='selfie' src={selfPic}></img>
                </div>
                    <p className='bubble-text'>
                    Hello and thanks for taking the time to take a look at my website!
                    I am a creative and hardworking Full Stack Developer with experience using a variety of languages, frameworks and technologies to build dynamic, interactive, fully responsive full stack web applications. I'm familiar with a variety of database and back end technologies and have worked on all sides of professional web development and deployment. I am always working to learn new technologies as well as to practice and improve upon the skills that I already have. I’m a problem solver who isn’t intimidated by a new challenge even if it involves tech that I’m not familiar with. I am passionate about coding and using technology to make people lives easier.
                    I am also a professional, friendly and positive person with good communication skills and a team player's attitude. I'm reliable and a fast learner that’s always excited to take on new challenges.
                    Feel free to contact me with any questions, comments, or opportunities. I'd love to hear from you!</p> 
                
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Project<div className='s'>s</div></h1>
            <div className='jumbo-bubble'>
                <h2 className='bubble-title'>Projects</h2>
                <p className='bubble-text'>Some info here</p>
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Background</h1>
            <div className='jumbo-bubble'>
                <h2 className='bubble-title'>Background</h2>
                <p className='bubble-text'>Some info here</p>
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Education</h1>
            <div className='jumbo-bubble'>
                <h2 className='bubble-title'>Education</h2>
                <p className='bubble-text'>Some info here</p>
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>About</h1>
            <div className='jumbo-bubble'>
                <h2 className='bubble-title'>About</h2>
                <p className='bubble-text'>Some info here</p>
            </div>
            <button className='next-btn' onClick={() => changePage(pageNumber+1)}>Next  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            <footer>
                <div className='footer-item personal-links'>
                    <a href='https://www.linkedin.com/in/josh-coyne' className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faLinkedin}/>www.linkedin.com/in/josh-coyne</a>
                    <a href='https://github.com/joshuacoyne' className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faGithub}/>github.com/joshuacoyne</a>
                    <a href={resume} className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faFile}/>Resume</a>
                </div>
                <div className='footer-item personal-info'>
                    <div className='personal-info-item'>Josh Coyne</div>
                    <div className='personal-info-item'>(412)337-1354</div>
                    <a href='mailto:josh.j.coyne@gmail.com' className='personal-info-item'>josh.j.coyne@gmail.com</a>
                </div>
                <div className='footer-item project-links'>
                    <a href='http://www.quilly.io' className='project-links-item'>www.quilly.io</a>
                    <a href='http://forgetmeknot.netlify.com' className='project-links-item'>forgetmeknot.netlify.com</a>

                </div>
            </footer>
        </div>
    )
}

export default MainPage;
