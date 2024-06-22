import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
   

  

  return (
    <nav>
    <div className="navbar">
      <div className='nav-hide'>
      <ul className="nav-menu">
      <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <button className="theme-toggle" onClick={changeToggle}>{theme === 'dark' ?  <i className="bi bi-sun"></i> : <i className="bi bi-moon-stars-fill"></i> }</button>
        <a  href="mailto:tineshpandian01.com" className="contact-button">Let's Talk</a>
      </div>
      </div>
      
      
      <div className='nav-menu-icon'>
      <a href='#profile'><i class="bi bi-house"></i></a>
      <a href='#projects'><i class="bi bi-grid"></i></a>
      <a href='#aboutme'><i class="bi bi-person"></i></a>
      <a href='#contact'><i class="bi bi-envelope"></i></a>
      <a onClick={changeToggle}>{theme === 'dark' ?  <i className="bi bi-sun"></i> : <i className="bi bi-moon-stars-fill"></i>}</a>
  
      <div className='chat'>
      <a  href="mailto:tineshpandian01.com" className="chat-btn"><i class="bi bi-chat-left-dots" ></i></a>
      </div>
      </div>
    </div>
    
    </nav>
  );
};

export default Navbar;
