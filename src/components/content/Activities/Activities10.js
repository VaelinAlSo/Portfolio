
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/BA_Fundamentals_1.png";
import directhistory5 from "../../../assets/BA_Fundamentals_Udemy.png";


import { Carousel, Card } from "antd";

export default function Activities10() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
      <h3> 	
Formation Business analyst Fundamentals Udemy </h3>
      <br>
      </br>
      <br></br>
      <div>
      <p> Lors de ma deuxième année d'étude à l'Ephec j'ai eu l'opportunité de kotter à louvain-la-neuve. J'ai sauté sur l'occasion et me suis inscrit pour l'année 2017-2018 au KAP Levant. <br>
      </br>
      Je me suis porté volontaire pour être trésorier, vu qu'il fallait quelqu'un de familer avec Excel de préférences et qui n'avait pas peur de se plonger dans les chiffres. Durant mes 5 mois j'ai eu l'occasion de gérer le compte en banque du Kot (dépenses, rentrées d'argent,...)
mais également l'organisations d'évenèments.<br></br>
J'ai pu mettre en pratique certaines choses que j'avais apprises lors du cours d'Init Pc avec Mr Delvigne concernant les bonnes pratiques Excel et même m'essayer à écrire quelques macros pour me faciliter la vie.      
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
