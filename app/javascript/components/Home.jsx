import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className="container p-2">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Desafio Dashboard</h1>
        <p className="lead">
            Projeto RoR e react - Api RESTful
        </p>
        <hr className="my-4" />
        <Link
          to="/"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Home
        </Link> 
        ! 
        <Link
          to="/dashboard"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  </div>
);

