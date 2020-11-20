import React from 'react';
import './Service.css';
import serviceCardImg from '../../resources/Group 65@2x.png';
import serviceCardImg2 from '../../resources/Group 66@2x.png';
import serviceCardImg3 from '../../resources/Group 69@2x.png';
import serviceCardImg4 from '../../resources/Group 72@2x.png';

const Service = () => {
    return (
        <div className="backgroundStyle">
            <div className="container pt-5">
                <div className="row justify-content-center">
                   <div className="col-md-4 text-center">
                       <h1 className="service-title">What we do</h1>
                       <p className="textStyle">Our main focus is to make the User Experience very
                        simple and easy. Simplicity is our Strength</p>
                   </div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row justify-content-center">
                      <div className="col-md-3">
                        <div className="p-4 serviceCardStyle">
                            <img className="card-img-top rounded mx-auto d-block cardImgStyle" src={serviceCardImg} alt="Card image cap"/>
                            <div className="card-body text-center">
                                <h5>Experience Design</h5>
                                <p className="card-text textStyle">The point of using Lorem Ipsum is that it has a more-orless normal. </p>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="p-4 serviceCardStyle">
                                <img className="card-img-top rounded mx-auto d-block cardImgStyle" src={serviceCardImg2} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5>Experience Design</h5>
                                    <p className="card-text textStyle">The point of using Lorem Ipsum is that it has a more-orless normal. </p>
                                </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                      <div className="p-4 serviceCardStyle">
                            <img className="card-img-top rounded mx-auto d-block cardImgStyle" src={serviceCardImg3} alt="Card image cap"/>
                            <div className="card-body text-center">
                                <h5>Experience Design</h5>
                                <p className="card-text textStyle">The point of using Lorem Ipsum is that it has a more-orless normal. </p>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                      <div className="p-4 serviceCardStyle">
                            <img className="card-img-top rounded mx-auto d-block cardImgStyle" src={serviceCardImg4} alt="Card image cap"/>
                            <div className="card-body text-center">
                                <h5>Experience Design</h5>
                                <p className="card-text textStyle">The point of using Lorem Ipsum is that it has a more-orless normal. </p>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default Service;