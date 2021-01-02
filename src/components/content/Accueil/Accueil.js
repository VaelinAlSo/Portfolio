import React from "react";
import "./Accueil.css";
//import BackGroundCarousel from "../shared/carousel";
import Bienvenue from "./CardBienvenue";
import Rdv from "./CardRdv";
import { Avatar } from 'antd';
import directhistory5 from "../../../assets/circle-cropped (1).png";
import Background from "../../../assets/background.jpg";
import { Button } from 'antd';
import Pdf from "../../../assets/Resume_Gilles_Quirynen.pdf";


export default function Accueil(props) {
    
  return (
    <div>
<div id="containerAccueil" style ={{backgroundImage: `url(${Background})`, borderRadius: 8}}>
      <div id= "centered-image" style={{ marginTop: "2%" } } >
      <div>
            <img src={directhistory5} alt="carousel"  />
          </div><br></br>
        <Bienvenue />
        
     {/*    <Rdv nav={props.nav} /> */}
      </div>
      
    {/*  <BackGroundCarousel /> */}
    </div>
    <div id="body">
    <a href = {Pdf} target = "_blank">  <Button>Click here to view CV</Button> </a>
    </div>
    </div>
  );
}
