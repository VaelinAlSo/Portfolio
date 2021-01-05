import { Typography, Divider } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import levant1 from "../../../assets/levant.png";
import levant2 from "../../../assets/levant1.png";
import levant3 from "../../../assets/levant3.jpg";
import { Carousel, Card } from "antd";
import 'fontsource-roboto';


const { Title, Paragraph, Text } = Typography;
export default function Activities1() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
    
  };

  return (
    <section className="centered">

      <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white"> Trésorier Kap Levant </h2>
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
      </Card>
      <br></br>
      <h4>Galerie d'images</h4>
      <Card
     style={{ width: 800, marginTop: "2%", height: 550, borderRadius: 8 }}
      cover={
        <Carousel autoplay>
          <div>
            <img src={levant1} alt="carousel" style={imgStyle} />
          </div>
          
          <div>
            <img src={levant3} alt="carousel" style={imgStyle} />
          </div>
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
