import React from 'react';
import TineshPandian from '../cv/TineshPandian.pdf';

const Intro = () => {
  return (
    <div className="intro" data-aos="fade-up" data-aos-duration="2000">
      <h1>I'm Tinesh Pandian <br /><span className="ui">Web Developer and</span><br /><span className="webs">UI/UX Designer</span></h1>
      <div className="download"  data-aos="fade-up" data-aos-duration="2000">
        <a href={TineshPandian} download className="cv-btn" >Download <span className="cv">CV <i className="bi bi-download"></i></span></a>
      </div>
    </div>
  );
};

export default Intro;
