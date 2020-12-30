import { Switch, Route } from "react-router-dom";
import Accueil from "../content/Accueil/Accueil";
import Portfolio from "../content/Portfolio/Portfolio";
//import Equipe from "../content/Equipe/Equipe";
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
       {/*
      <Switch>
        <Route exact strict path="/Equipe" component={Equipe} />
      </Switch>
      <Switch>
        <Route exact strict path="/Horaires" component={Horaires} />
      </Switch>
      <Switch>
        <Route exact strict path="/Informations" component={Informations} />
        
      </Switch>
        */}
    </div>
  );
}
