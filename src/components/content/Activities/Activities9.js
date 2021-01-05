import { Typography, Divider } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import levant1 from "../../../assets/BA_Fundamentals_Udemy.png";
import levant2 from "../../../assets/BA_Fundamentals_1.png";

import { Carousel, Card } from "antd";
import 'fontsource-roboto';


const { Title, Paragraph, Text } = Typography;
export default function Activities9() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
    
  };

  return (
    <section className="centered">
 <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h3 className="white"> Formation Business analyst Fundamentals Udemy </h3>
      <br>
      </br>
      <br></br>
      <div>
      <p> Udemy, Inc. est un fournisseur de cours en ligne ouvert américain destiné aux adultes et aux étudiants professionnels. Il a été fondé en mai 2010 par Eren Bali, Gagan Biyani et Oktay Caglar. En janvier 2020, la plateforme comptait plus de 35 millions d'étudiants et 57000 instructeurs dispensant des cours dans plus de 65 langues. <br>
      </br>
     <br></br>
     
      Jeremy Aschenbrenner :  "I am a veteran Business Analyst with more than 1000 completed projects. I've done business analysis work for companies in many industries including health care, telecommunications, automotive, trucking, consumer goods, financial services, food and beverage, and more.

       I created The BA Guide to break down the barriers to becoming a Business Analyst. Throughout our various courses, I teach you what you need to know in order to start your Business Analyst career."
     <br></br><br></br> J'ai découvert la Business Analyse lors d'un cours à l'Ephec avec Mr Faulkner et depuis, j'ai continué à m'y intérésser de mon coté. J'ai décidé de suivre ce cours car il était recommandé sur tous les forums parlant de Business analyse et après l'avoir fini je comprends bien pourquoi.<br></br> C'est un cours extrêment vaste qui met souvent l'étudiant aux centre des problématiques discutées et qui l'amène à devoir utiliser toutes les techniques et les outils vu au cours pour les résoudre.      
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
            <img src={levant2} alt="carousel" style={imgStyle} />
          </div>
          
        </Carousel>
      }
    >
      
      
    </Card>
      </section>
    
  );
}
