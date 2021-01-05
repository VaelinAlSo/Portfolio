
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/js1.png";
import directhistory5 from "../../../assets/js2.png";
import directhistory6 from "../../../assets/fs3.png";
import directhistory7 from "../../../assets/fs4.png";

import { Carousel, Card } from "antd";

export default function Activities4() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
          <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white">Job Search and Interview </h2>
      <br>
      </br>
      <br></br>
      <div>
      <p> En voyant la date du diplôme se rapprocher à grand pas, il était grand temps que je me penche sur la recherche d'emploi et au 'networking' en général. Lors du mois de décembre 2020, j'ai effectué un refonte totale de mon CV (en plus de le à chaque foisretravailler pour le rendre le plus attrayant possible pour chaque offre d'emplois) et rédigé des dizaines de lettre de motivation. <br>
      </br>
     J'ai passé beaucoup d'heures sur linkedIn à apprendre comment être attractif sur son CV et lors des interviews afin d'avoir les meilleurs résultats possible lors de ma recherche d'emploi. J'ai également suivi toutes mes candidatures de très près en les loggant dans un document excel pour avoir une meilleur idée de ce qui fonctionnait et ce qui fonctionnait moins.<br></br>
J'ai pu mettre en pratique certaines choses que j'avais apprises lors du cours de communication notamment sur la création de mon CV mais également sur les skills de présentation et d'interviews.      
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
          <div>
            <img src={directhistory6} alt="carousel" style={imgStyle} />
          </div>
          <div>
            <img src={directhistory7} alt="carousel" style={imgStyle} />
          </div>
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
