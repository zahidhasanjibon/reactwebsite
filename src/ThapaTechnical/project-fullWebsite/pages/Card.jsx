import { NavLink } from 'react-router-dom';

const Card = ({ src, title }) => (
    <div className="col-md-4 col-10 mx-auto parent">
        <div className="card">
            <img className="card-img-top s-img m-auto" src={src} alt="Card  cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    cards content.
                </p>
                <NavLink to="/" className="btn btn-primary">
                    Click to Proceed
                </NavLink>
            </div>
        </div>
    </div>
);
export default Card;
