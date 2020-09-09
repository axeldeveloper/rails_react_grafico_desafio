import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../components/Home";
import Metters from "../components/Metters";
import Metter from "../components/Metter";
import MetterNew from "../components/MetterNew";
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
                <Route path="/metters" exact component={Metters} />
                <Route path="/metter/:id" exact component={Metter} />
                <Route path="/metter" exact component={MetterNew} />
                
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