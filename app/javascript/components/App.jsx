import React from "react";
//import Routes from "../routes/Index";

//export default props => <>{Routes}</>;

//import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Dashboard from "../components/Dashboard";

import Header from './Header.jsx';


class App extends React.Component {
    render() {
      return (
      <Router>                
          <Header/>
          <main role="main">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path="/recipes" exact component={Recipes} />
                <Route path="/recipe/:id" exact component={Recipe} />
                <Route path="/recipe" exact component={NewRecipe} />
                
            </Switch>
          </main>
        </Router>
      );
    }
  }



export default App;
//export const App;
//export default props => App;


//export default props => <>{App}</>;
//export default props => PrimaryLayout();