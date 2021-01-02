
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory1 from "../../../assets/direct-history-content1.png";
import directhistory2 from "../../../assets/direct-history-content2.png";
import directhistory3 from "../../../assets/direct-history-content3.png";

import { Carousel, Card } from "antd";

export default function Activities2() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
      <h3> Direct-History Création de contenu </h3>
      <br>
      </br>
      <br></br>
      <div>
      <p> J'ai eu une passion pour l'Histoire depuis que je suis tout petit. Alors lorsque j'ai commencé à avoir des cours sur le développement web et la capacité de faire des sites moi-même, j'ai décidé de lier ces deux passions en créant un site web/blog sur l'histoire <br>
      </br>
      J'ai eu l'occasion d'apprendre énormément sur l'histoire à travers ce site que ce soit au niveau du processus de recherche historiques, de vérifications des sources et même de ma connaiscance de l'anglais. En effet, j'ai décidé d'écrire tous mes articles en anglais pour avoir un site plus international et une audience potentielle plus large.<br></br>
J'ai pu mettre en pratique certaines choses que j'avais apprises lors de mes cours de développement web notamment les bonnes pratiques Css pour remodeler certains composants à ma guise et la navigation entre les différentes pages du site.       
      </p>
      </div>
      <h4>Galerie d'images</h4>
      <Card
      style={{ width: 800, marginTop: "2%", height: 550, borderRadius: 8 }}
      cover={
        <Carousel autoplay>
          <div>
            <img src={directhistory2} alt="carousel" style={imgStyle} />
          </div>
          <div>
            <img src={directhistory1} alt="carousel" style={imgStyle} />
          </div>
          <div>
            <img src={directhistory3} alt="carousel" style={imgStyle} />
          </div>
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
