import React from 'react';
import { Link } from 'react-scroll';
import profileimg from '../images/profileimg.jpg';

const ProfileBox = () => {
  return (
    <div className="profile-box">
      <div className="profile">
        <h1 className="heading-text"><span className="letter">T</span>inesh <span className="letter">P</span>andian</h1>
        <img src={profileimg} alt="Tinesh Pandian" />
        <p className="specialization"><i>Specialization</i><br /><span className="spec">Web Developer | UI/UX Designer</span></p>
        <p className="address"><i>Address</i><br /><span className="spec">Tamil Nadu, Chennai</span></p>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/c_r_a_z_y_f_r_e_a_k_e_r/" className="social-icon"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/tineshpandian01/" className="social-icon"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/TineshPandian" className="social-icon"><i className="bi bi-github"></i></a>
      </div>
      <div className="talk">
        <Link to="contact" smooth={true} duration={500}>
        <button className="contact-btn"><spam>Let's Work Together..!</spam></button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileBox;
