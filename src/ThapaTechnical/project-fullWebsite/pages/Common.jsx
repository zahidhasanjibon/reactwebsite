// import img from '../images/home.svg';
import { NavLink } from 'react-router-dom';

const Common = ({ head, photo, visit, btnName }) => (
    <>
        <section id="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex align-items-center mt-5 cont ">
                            <div className="col-md-6 pt-5 pt-lg-0 mt-5 ">
                                <h1 className="my-3">
                                    {head} <br />
                                    <span className="brand-name"> Zahid Hasan</span>
                                </h1>
                                <h5 className="mb-4">
                                    We are the team of talented developer making website
                                </h5>
                                <div className="mt-4">
                                    <NavLink to={visit} className="btn-grad ">
                                        {btnName}
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-md-6 header-img text-center">
                                <img src={photo} className="img-fluid animated" alt="pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
export default Common;
