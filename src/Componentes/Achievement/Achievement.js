import React from 'react';
import './Achievement.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import smile from '../../resources/happy@2x.png';
import marketing from '../../resources/marketing@2x.png';
import surface from '../../resources/surface1@2x.png';
import transport from '../../resources/transportation@2x.png';
const Achievement = () => {
    return (
        <div className="background">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 className="">Our Achievements</h1>
                        <p className="textStyle pt-3">It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letter.</p>
                    </div>
                    <div className="col-md-8 achievement-container">
                            <div className="row">
                                <div className="row achievement-card ul-dr-card mr-5">
                                    <div>
                                        <img height="60px" width="60px" src={smile} alt="" />
                                    </div>
                                    <div>
                                        <h1>700+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="row achievement-card ur-dl-card">
                                    <div>
                                    <img height="60px" width="60px" src={marketing} alt="" />
                                    </div>
                                    <div>
                                        <h1>25+</h1>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        
                        <div className="">
                            <div className="row">
                                <div className="row achievement-card ur-dl-card mr-5">
                                    <div>
                                    <img height="60px" width="60px" src={surface} alt="" />
                                    </div>
                                    <div>
                                        <h1>140+</h1>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                                <div className="row achievement-card ul-dr-card">
                                    <div>
                                    <img height="60px" width="60px" src={transport} alt="" />
                                    </div>
                                    <div>
                                        <h1>75+</h1>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;