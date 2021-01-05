
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/DevDay1.png";
import directhistory5 from "../../../assets/DevDay2.png";


import { Carousel, Card } from "antd";

export default function Activities8() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
        <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white">Devday : webinar traitement du langage naturel par les machines et The serverLess Panacea </h2>
      <br>
      </br>
      <br></br>
      <div>
      <p> "Quand ils ont réalisé qu'aucune de leurs idoles ne viendrait jamais en Wallonie parce qu'il n'y avait pas d'événement décent pour les accueillir, 4 développeurs ont décidé d'organiser la plus grande conférence de la région. 4 ans et plus de 1000 participants plus tard, les organisateurs (avec 3 nouveaux amis) sont fiers de dire qu'ils ont eu le privilège d'accueillir rien de moins que 25 MVP et 20 Microsoftees lors des éditions précédentes".
<br></br><br></br>Je m'étais inscris au Devday auparavant mais malheureusement je n'avais pas pu y assister. J'ai donc sauté sur l'occasion cette année malgré le fait que contrairement aux années précédentes, cette édition s'est passée en 100% remote.<br></br>
Le thème des webinars m'intéressait mais c'était des sujets avec lesquels j'étais très peu familier. Malgré cela, j'ai énormément appris sur le Machine Learning et le serverless lors de ces 3 heures. La conférence que j'ai préféré était sur le traitement du lanagage naturel par les machines, un sujet passionnant donnée par une excellente conférencière.    
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
