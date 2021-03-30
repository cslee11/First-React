  
import React from "react";
import "./Home.css";
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import nikebanner from '../../pics/nikelogo1.png';
import Navbar from '../../components/Navbar/Navbar1';
import Saccordion from '../../components/Accordion/SimpleAccordion';
import Card from '../../components/Card/Card';
import Grid from '../../components/Grid/Grid';
import AutoLayOut from '../../components/Grid/AutoLayOut'; 


function Home() {
    //can also work if declared alongside "import React,..." as: {useState}//
  const [firstName, setFirstName] = React.useState('Chia');

  const changefirstName = ()=> {
      setFirstName('Goku')
  }

  return (
    <body>
      <header className="root">
      <Logo className='logo root'/>
      <img src={nikebanner} alt='nike banner'/>
      <h1>Home Page</h1>
      <p>Intro to React</p>
      </header>
      <div className='nav'><Navbar/></div>
      <AutoLayOut/>
      <br/>
      <Button buttonName='Back' color='black'/> 
      <Button buttonName='Play'color='lightblue' onClick={changefirstName}/>
      <h1>{firstName}</h1> 
      <Button buttonName='Pause'color='orange'/>
      <Button buttonName='Next'color='blue'/> 
      <Button buttonName='Like'color='lightred'/> 
      <br/>
      <Grid/>
      <br/>
      <Saccordion title='Survivor-Accordion' body='Wow this is pretty Awesome!!!!'/>
      <Saccordion title='Books' body='Harry Potter'/>
      <Saccordion title='Music' body='Hip-hop'/>
      <Saccordion title='TV-Shows' body='That 70s Show'/>
      <br/>
      <Card titleName={firstName} date='March 30, 2021' image='https://c8.alamy.com/comp/W2A297/obese-fat-boy-pick-his-nose-and-bored-isolated-on-white-background-health-care-and-emotion-concept-W2A297.jpg' imageTitle='Boy Deep in Thought' cardHeader="Wouldn't this take..." cardBody="Too Long? It may be better to manipulate the typography in the js file?"/>
      <Card titleName='My Second Card' date='March 30, 2021' image='https://venturebeat.com/wp-content/uploads/2013/10/mega-charizard-x_official-art_300dpi.jpg?fit=685%2C600&strip=all' imageTitle='Boy Deep in Thought' cardHeader="Charizard" cardBody="Evolutionized Charizard?"/>
      <Card titleName='My Third Card' date='March 30, 2021' image='https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDA3NjE5NzcxNDQyNDQ5/manny-pacquiao-freddie-roachjpg.jpg' imageTitle='Boy Deep in Thought' cardHeader="Manny Pacqiuao" cardBody="The Great Manny Pacqiuao and Trainer Freddie Roach hitting pads."/>

    
     
    </body>
  );
}

export default Home;