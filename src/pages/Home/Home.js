  
import React from "react";
import "./Home.css";
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import nikebanner from '../../pics/nikelogo1.png';

function Home() {
  return (
    <body>
      <header className="root">
      <Logo className='logo root'/>
        <img src={nikebanner} alt='nike banner'/>
        <h1>Home Page</h1>
        <p>Intro to React</p>
      </header>
      <br/>
      <div><Button/> </div>
      
     
    </body>
  );
}

export default Home;