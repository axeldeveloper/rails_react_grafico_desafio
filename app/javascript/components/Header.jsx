
import React from "react";
//import Routes from "../routes/Index";

//export default props => <>{Routes}</>;

//import { Switch, Route, Link } from 'react-router-dom';
import { Link } from "react-router-dom";


class NavLink extends React.Component {

    render() {
        return (
          <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                    <Link 
                      className="nav-link" 
                      to={this.props.path}
                      onClick={() => this.props.onClick()}
                    >
                {this.props.text}</Link>
          </li>
        );
    }
};
  

class Header extends  React.Component {

    constructor(props) {
      super(props);
      this.state = {
        links: [
          {path: "/",          text: "Home", isActive: true},
          {path: "/recipes",   text: "Recipes", isActive: false},
          {path: "/dashboard", text: "Dashboard", isActive: false},
        ]
      }
    }
  
    handleClick(i) {
      const links = this.state.links.slice(); 
      for (const j in links) {
        links[j].isActive = i == j ;
      }
      this.setState({links: links});
      
      console.log("links ", links)
    }
  
  
    render() {
      return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Desafio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {this.state.links.map((link, i) => 
                            <NavLink 
                                path={link.path} 
                                text={link.text} 
                                isActive={link.isActive}
                                key={link.path} 
                                onClick={() => this.handleClick(i)}
                            /> 
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
      );
    }
};

export default Header;