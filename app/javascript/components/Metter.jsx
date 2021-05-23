import React from "react";
import { Link } from "react-router-dom";

class Metter extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { metter: { } };
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const url = `/api/v1/metters/show/${id}`;
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ metter: response }))
        .catch(() => this.props.history.push("/recipes"));
        
    }

    deleteRecipe() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        const url = `/api/v1/metters/destroy/${id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(() => this.props.history.push("/metters"))
        .catch(error => console.log(error.message));
    }

    render() {
        const { metter } = this.state;
       
        return (
                <div className="container mt-5"> 
                    <div className="row">
                        
                        <div className="col-lg-12">                     
                            <h1 className="mt-5"> {metter.title}</h1>
                        </div>         
                        <div className="col-sm-12 col-lg-7">
                            <h5 className="mb-2">Title</h5>
                            <div> 
                                {metter.title}
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                            <h5 className="mb-2">Active</h5>
                            <div> 
                            {metter.active == true? <p>yes</p>: <p>Not</p> } 
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                            <button type="button" className="btn btn-danger" onClick={this.deleteRecipe}>
                                Delete Metter
                            </button>
                        </div>
                    
                        <Link to="/metters" className="btn btn-link">
                            Back to Metter
                        </Link>
                        
                    </div>
                </div>
        );
    }
}

export default Metter;