
import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import directhistory4 from "../../../assets/dh1.png";
import directhistory5 from "../../../assets/dh2.png";
import directhistory6 from "../../../assets/dh3.png";
import directhistory7 from "../../../assets/dh4.png";
import { Carousel, Card } from "antd";

export default function Activities3() {
  const { Meta } = Card;
  const imgStyle = {
    maxHeight: 450,
    
  };

  return (
    <section className="centered">
         <Card 
      style={{backgroundColor: 'rgba(23, 29, 42, 1.0)', border: 0 , borderRadius: 8}}
      
      >
      <h2 className="white"> Direct-History SEO analysis and marketing </h2>
      <br>
      </br>
      <br></br>
      <div>
      <p> Le fait d'avoir mon propre site m'a beaucoup appris sur la gestion de ceux-ci et m'a amené à m'intéresser encore plus à comment rendre un site succesful et potentiellement comment en retirer des revenus (publicités, publications sponsorisées, SEO,...) <br>
      </br>
      Je me suis principalement penché sur les aspects SEO (Search Engine optimization) que je décrirais comme le processus pour améliorer la visibilité d'un site dans les moteurs de recherches. J'ai suivi des cours en ligne, écouté des podcasts de personnes ayant un blog ou un site ayant beaucoup de traffic, lu des articles sur le sujet. <br></br>
      J'ai ensuite mis en pratique tout ce que j'avais appris lors de mes recherches sur mon propre site. J'ai assez vite vu des résultats assez encourageant avec un traffic en nette hausse entre l'année de lancement de mon site par rapport à l'année suivante. Je continue à essayer d'améliorer les performances de mon site dans l'espoir d'un jour peut-être pouvoir en retirer un revenu. Mais pour le moment je me satisfait du fait que des gens lisent et apprécient mon travail.
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
