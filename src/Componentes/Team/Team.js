import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div className="teamBgStyle">
            <h1 className="text-center service-title pt-4">Choose Your Dedicated Team</h1>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-body text-center bg-white teamCardStyle">
                            <h1 className="servicePrice">$199</h1>
                            <b>For Basic</b>
                            <hr className="border-info"/>
                            <p><b>Homepage</b></p>
                            <p><b>No Inner Page</b></p>
                            <p><b>Asset file</b></p>
                            <p><b>Source file</b></p>
                            <p><b>Free Stock Photos</b></p>
                            <p><b>10 Days Free Support</b></p>
                            <p><b>24/7 Support</b></p>
                            <button className="btn">Order Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card-body text-center bg-white teamCardStyle">
                            <h1 className="servicePrice">$199</h1>
                            <p><b>For Preferred</b></p>
                            <hr className="border-info"/>
                            <p><b>Homepage</b></p>
                            <p><b>4 Inner Page</b></p>
                            <p><b>Asset file</b></p>
                            <p><b>Source file</b></p>
                            <p><b>Free Stock Photos</b></p>
                            <p><b>20 Days Free Support</b></p>
                            <p><b>24/7 Support</b></p>
                            <button className="btn">Order Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card-body text-center bg-white teamCardStyle">
                            <h1 className="servicePrice">$199</h1>
                            <p><b>For Elite</b></p>
                            <hr className="border-info"/>
                            <p><b>Homepage</b></p>
                            <p><b>8 Inner Page</b></p>
                            <p><b>Asset file</b></p>
                            <p><b>Source file</b></p>
                            <p><b>Free Stock Photos</b></p>
                            <p><b>30 Days Free Support</b></p>
                            <p><b>24/7 Support</b></p>
                            <button className="btn">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;