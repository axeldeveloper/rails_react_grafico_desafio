import React from "react";
import { Link } from "react-router-dom";

class Metters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metters: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/metters/index";
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ metters: response }))
        .catch(() => this.props.history.push("/"));
    }
    render() {
        const { metters } = this.state;

        const allRecipes = metters.map((metter, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    <img
                        src="https://miro.medium.com/max/700/1*PFEk9y9K_k5Ql58pC567-A.png"
                        className="card-img-top"
                        alt={`${metter.title} image`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{metter.title}</h5>
                        <Link to={`/metter/${metter.id}`} className="btn custom-button">
                            View Metter
                        </Link>
                    </div>
                </div>
            </div>
        ));
    
        const noRecipe = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                No Metters yet. Why not <Link to="/recipe">create one</Link>
                </h4>
            </div>
        );

        return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
                <h1 className="display-4">
                    evaluation materials
                </h1>
                <p className="lead text-muted">
                All Metters
                </p>
            </div>
            </section>
            <div className="py-5">
            <main className="container">
                <div className="text-right mb-3">
                    <Link to="/metter" className="btn custom-button">
                        Create New Metters
                    </Link>
                </div>
                <div className="row">
                    {metters.length > 0 ? allRecipes : noRecipe}
                </div>
                <Link to="/" className="btn btn-link">
                    Home
                </Link>
            </main>
            </div>
        </>
        );
    }
}
export default Metters;