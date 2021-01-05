
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/jobitday1.png";
import directhistory5 from "../../../assets/jobitday2.png";



import { Carousel, Card } from "antd";

export default function Activities7() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
        <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white"> Webinar : Job It day, les métiers du Data </h2>
      <br>
      </br>
      <br></br>
      <div>
      <p>Stéphane Faulkner est Professeur Associé en Technologies et Ingénierie des Systèmes d'Information à l'Université de Namur (FUNDP). Il est professeur invité à l'IAG - Business School de l'Université de Louvain (UCL) avec les Facultés Universitaires de St Louis de Brusssel (FuSL) et l'Ecole des Pratiques et des Etudes des Affaires (Ephec). Il est également membre du centre de recherche PReCISE.


<br></br>Auparavant, il a obtenu un doctorat. de l'Université de Louvain (UCL) en 2004, avec une thèse sur l'architecture logicielle et les systèmes multi-agents. Au cours de son doctorat, il a commencé à contribuer au développement d'un cadre architectural formel pour décrire les systèmes d'information multi-agents BDI.<br></br> Ce cadre étend l'abstraction architecturale des langages de description architecturale (ADL) actuels avec des concepts d'agent BDI et propose un catalogue de styles réutilisables détaillant comment exploiter des configurations architecturales spécifiques.<br></br>
    
    <br></br><br></br>
    J'ai décidé de suivre ce webinar lors des Job Days 2020 car il était donné par l'un des professeurs que j'ai eu la chance d'avoir à L'Ephec mais également car le sujet même m'intéréssait énormément vu que j'espérais m'orienter dans le monde du data par la suite.<br></br>
    J'en ai retiré beaucoup d'infos intéréssantes et des pistes à suivre pour parfaire ma connaiscance du monde du data et les opportunités qui s'y trouvent et qui s'y trouveront dans le futur.
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
