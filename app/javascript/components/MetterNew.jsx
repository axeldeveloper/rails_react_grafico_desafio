import React from "react";
import { Link } from "react-router-dom";

class MetterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            active: false

        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }
  
    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
  
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    onSubmit(event) {
        event.preventDefault();

        const url = "/api/v1/metters/create";
        const { title, active} = this.state;
  
        if (name.title == 0) return;
  
        const body = { title,  active };
  
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.props.history.push(`/recipe/${response.id}`))
        .catch(error => console.log(error.message));
    }
  
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">

                <h1 className="mt-5">Desafio Dashboard</h1>
                <p className="lead">
                    Add a new metters to collections.
                </p>    
              
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="titleName">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="titleName"
                            className="form-control"
                            required
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="active">Active</label>
                        <br/>
                        <input
                            type="radio"
                            name="active"
                            value="true"
                          
                            required
                            onChange={this.onChange}
                        /> Enable  
                        <input 
                            type="radio" 
                            value="false"
                            name="active"                          
                            required
                            onChange={this.onChange}
                        /> Disable
                        <small id="ingredientsHelp" className="form-text text-muted">
                                select one.
                        </small>
                    </div>
                   
                    <button type="submit" className="btn custom-button mt-3">
                        Create Metters
                    </button>
                    <Link to="/recipes" className="btn btn-link mt-3">
                        Back to Metters
                    </Link>
                </form>
            </div>
          </div>
        </div>
      );
    }
  
  }
  
  export default MetterNew;