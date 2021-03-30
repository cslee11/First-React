  
import React from "react";
import "./Home.css";
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import nikebanner from '../../pics/nikelogo1.png';
import Navbar from '../../components/Navbar/Navbar1';
import Saccordion from '../../components/saccordion/saccordion';
import Card from '../../components/Card/Card';

function Home() {
  return (
    <body>
      <header className="root">
      <Logo className='logo root'/>
      <img src={nikebanner} alt='nike banner'/>
      <h1>Home Page</h1>
      <p>Intro to React</p>
      </header>
      <div className='nav'><Navbar/></div>
      <br/>
      <div><Button/> </div>
      <div><Button/> </div>
      <div><Button/> </div>
      <div><Button/> </div>
      <div><Button/> </div>
      <Saccordion/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    
     
    </body>
  );
}

export default Home;