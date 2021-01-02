
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/opc_react1.png";
import directhistory5 from "../../../assets/opc_react.png";


import { Carousel, Card } from "antd";

export default function Activities5() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
      <h3> Formations OpenClassroom : Réalisez une application web avec React.js </h3>
      <br>
      </br>
      <br></br>
      <div>
      <p> J'ai effectué cette formation dans le cadre du cours de développement web car lors de ce cours nous devions créer un projet de toutes pièce mais nous avions le choix de quelles technologies utilser. Mon collègue et moi étions principalement familier avec javascript, nous avons donc choisi un framework récent mais très populaire sur le marché: ReactJS <br>
      </br>
      J'ai suivi cette formation sur OpenClassroom, qui est un site reconnu pour la qualité de ses formations en ligne et ce cours en e-learning a clairement été d'un grande importance dans la conception du site web que j'ai réalisé lors de ce projet et d'autres projets par la suite.<br></br>
      </p>
      </div>
      <h4>Galerie d'images</h4>
      <Card
      style={{ width: 800, marginTop: "2%", height: 550, borderRadius: 8 }}
      cover={
        <Carousel autoplay>
          <div>
            <img src={directhistory4} alt="carousel" style={imgStyle} />
          </div>
          <div>
            <img src={directhistory5} alt="carousel" style={imgStyle} />
          </div>
         
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
