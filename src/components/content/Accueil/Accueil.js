import React from "react";
import "./Accueil.css";
//import BackGroundCarousel from "../shared/carousel";
import Bienvenue from "./CardBienvenue";
import Rdv from "./CardRdv";


export default function Accueil(props) {
  return (
    
    <div id="containerAccueil" style ={{ borderRadius: 8}}>
      <div style={{ marginTop: "2%" } } >
        <Bienvenue />
     {/*    <Rdv nav={props.nav} /> */}
      </div>
      
    {/*  <BackGroundCarousel /> */}
    </div>
    
  );
}
