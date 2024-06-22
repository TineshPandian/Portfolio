import React from 'react'
import TineshPandian from '../cv/TineshPandian.pdf';
import html from '../images/html.png';
import css from '../images/css-3.png';
import figma from '../images/figma.png';
import js from '../images/js.png';
import react from '../images/react.png';
import wordpress from '../images/wordpress.png';
import nodejs from '../images/nodejs.png';


const AboutMe = () => {
  return (
    <div className='aboutme'>
        <p className="heading" data-aos="fade-up" data-aos-duration="2000">~AoutMe~</p>
        <div className='aboutme-sentence' data-aos="fade-up" data-aos-duration="2000">
        <p className="aboutme-text">Crafting Elegance From Complexity With Seamless Design Solutions</p>
        </div>
        <div className='aboutme-content'>
            <div className='aboutme-left' data-aos="fade-up" data-aos-duration="2000">
                 <p className="aboutme-small">
                    Welcome! I'm Tinesh Pandian, a dedicated and innovative web developer and UI/UX designer. I specialize in creating stunning solutions that not only solve your problems but also propel your business to new heights.
                </p> 
                <p className='mission' data-aos="fade-up" data-aos-duration="2000">
                    <span className='aboutme-heading'>My Mission:</span>
                    <ul>
                        <li>To transform your vision into reality through exceptional web design and development. I aim to enhance user experiences, ensuring your audience is engaged and satisfied.</li>
                    </ul>
                </p>
                <p className='what-i-do' data-aos="fade-up" data-aos-duration="2000">
                    <span className='aboutme-heading'>What I Do:</span><br/>
                    <ul>
                         <li>Web Development: Crafting responsive, fast, and user-friendly websites that meet your business needs.</li>
                         <li>UI/UX Design: Designing intuitive and attractive interfaces that provide seamless user experiences.</li>
                    </ul>
                </p>
                <p className='why-choose-me' data-aos="fade-up" data-aos-duration="2000">
                    <span className='aboutme-heading'>Why choose me?</span><br/>
                    <ul>
                        <li>Creativity: I bring a unique blend of creativity and technical expertise to every project.</li>
                        <li>Innovation: Staying updated with the latest trends and technologies, I ensure your website stands out.</li>
                        <li>Growth-Oriented: My solutions are designed to help your business grow, ensuring you reach your goals.</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="about-download" data-aos="fade-up" data-aos-duration="2000">
        <a href={TineshPandian} download className="cv-btn">Download <span className="cv">CV <i className="bi bi-download"></i></span></a>
      </div>
      <div className='stack' data-aos="fade-up" data-aos-duration="2000">
                <p className="stack-heading">Technology Stack I Use</p>

                <div className='stack-coloum'>
                    <div className="stack-item">
                        <img src={html} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={css} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={js} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={react} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={nodejs} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={figma} alt="HTML" />
                    </div>
                    <div className="stack-item">
                        <img src={wordpress} alt="HTML" />
                    </div>

                </div>

            </div>
    </div>
  )
}
export default AboutMe;