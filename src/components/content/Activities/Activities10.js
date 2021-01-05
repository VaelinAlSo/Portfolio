
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/Aperodoo.png";
import directhistory5 from "../../../assets/Aperodoo_2.png";
import directhistory6 from "../../../assets/aperodoo_3.png";


import { Carousel, Card } from "antd";

export default function Activities10() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (

    <section className="centered">
      <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white"> 	Aperodoo : Présentation de Odoo et job opportunities </h2>
      <br>
      </br>
      <br></br>
      
      <div>
      <p> Odoo est une suite d'applications open source qui couvrent tous les besoins d'une entreprise: CRM, eCommerce, Comptabilité, Inventaire, Point de Vente, Gestion de Projet, etc.

Le positionnement unique d'Odoo est d'être à la fois très facile à utiliser et totalement intégré.<br></br>
<br></br>
Lors de mes études j'ai souvent entendu parler d'Odoo, une géant Wallon de l'ERP. J'ai toujours été intrigué par cette entreprise qui s'était établi dans 2 fermes pas très loin de Louvain-la-Neuve, j'ai donc décidé de participer à leur aperodoo annuel.
<br></br>L'aperodoo s'est passé en plusieurs étapes : d'abord une présentation de leur produit principal ensuite une présentation de l'entreprise en elle-même et des différentes locations et enfin une présentation des équipes et des offres d'emplois.
<br></br>J'ai énormément appris sur la manière dont fonctionnait ce type d'entreprise grâce au speech du CEO, Fabien Plinckaers.
      </p>
      </div>
      
      </Card>

      <br></br>
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
          <div>
            <img src={directhistory6} alt="carousel" style={imgStyle} />
          </div>
         
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
