import { Switch, Route } from "react-router-dom";
import Accueil from "../content/Accueil/Accueil";
import Portfolio from "../content/Portfolio/Portfolio";
import Activities1 from "../content/Activities/Activities1";
import Activities2 from "../content/Activities/Activities2";
import Activities3 from "../content/Activities/Activities3";
import Activities4 from "../content/Activities/Activities4";
import Activities5 from "../content/Activities/Activities5";
import Activities6 from "../content/Activities/Activities6";
import Activities7 from "../content/Activities/Activities7";
import Activities8 from "../content/Activities/Activities8";
import Activities10 from "../content/Activities/Activities10";
import Activities9 from "../content/Activities/Activities9";
import Projet from "../content/Projet/Projet";

//import Horaires from "../content/Horaires/Horaires";
//import Informations from "../content/Informations/Informations";

export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route
          exact
          strict
          path="/"
          component={() => <Accueil nav={props.nav} />}
        />
        
      </Switch>
     
      <Switch>
        <Route
          exact
          strict
          path="/Portfolio"
          component={() => <Portfolio nav={props.nav} />}
        />
      </Switch>
      
      <Switch>
        <Route exact strict path="/Activities1" component={Activities1} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities2" component={Activities2} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities3" component={Activities3} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities4" component={Activities4} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities5" component={Activities5} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities6" component={Activities6} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities7" component={Activities7} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities8" component={Activities8} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities10" component={Activities10} />
      </Switch>
      <Switch>
        <Route exact strict path="/Activities9" component={Activities9} />
      </Switch>
      
       
      <Switch>
        <Route exact strict path="/Projet" component={Projet} />
      </Switch>
      {/*
      <Switch>
        <Route exact strict path="/Informations" component={Informations} />
        
      </Switch>
        */}
    </div>
  );
}
