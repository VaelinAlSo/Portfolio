
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
         <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white"> Formations OpenClassroom : Réalisez une application web avec React.js </h2>
      <br>
      </br>
      <br></br>
      <div>
          <p>Open Classroom est née de la rencontre de Pierre Dubuc et Mathieu Nebra, alors âgés de respectivement 11 et 13 ans. Tous deux animés de la même passion pour l’informatique, ils lancent leur premier cours de programmation en ligne en 1999 ; dès le début de l’histoire, l’objectif est de rendre accessible un savoir complexe.
<br></br>
Une communauté de plus en plus large se construit progressivement autour de Mathieu et Pierre, qui lancent alors l’un des premiers forums en ligne d’entraide au code à la programmation : le Site du Zéro. Mine d’information pour tous les passionnés d’internet, le SdZ devient vite une référence à travers le Web francophone.
<br></br>
En 2013, les deux associés décident de lancer OpenClassrooms, une véritable école en ligne offrant d’abord de très nombreux cours gratuits sur une multitude de sujets ; OpenClassrooms propose aujourd’hui de nombreux parcours menant à une licence ou un mastère, ou encore à un diplôme inscrit au Répertoire National des Compétences Professionnelles.</p>
      <p> J'ai effectué cette formation en supplément du cours de développement web car lors de ce cours nous devions créer un projet de toutes pièce mais nous avions le choix de quelles technologies utilser. Mon collègue et moi étions principalement familier avec javascript, nous avons donc choisi un framework récent mais très populaire sur le marché: ReactJS <br>
      </br>
      J'ai suivi cette formation sur OpenClassroom, qui est un site reconnu pour la qualité de ses formations en ligne et ce cours en e-learning a clairement été d'un grande importance dans la conception du site web que j'ai réalisé lors de ce projet et d'autres projets par la suite.<br></br>
      </p>
      </div>
      </Card>
      <br></br>
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
