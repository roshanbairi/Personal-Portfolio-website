import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

 const About = () => {
     


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />
   
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Roshan, and Iam a frontend developer skilled in building responsive 
                            and dynamic web interfaces using React.js, JavaScript, HTML, and CSS. I have hands-on knowledge of AWS services,
                            which helps me understand how to deploy and manage modern web applications in the cloud. 
                            I'm passionate about clean code, performance optimization, and delivering great user experiences.
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            
                        </ul>
                        
                    </div>

                    { <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> }
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About