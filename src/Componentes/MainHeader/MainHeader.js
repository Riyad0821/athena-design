import React from 'react';
import './MainHeader.css';
import headerImg from '../../resources/headerImg.png'
const MainHeader = () => {
    return (
        <header>
            <div className="row header-container">
                <div className="p-5 col-md-6 left-card">
                    <h1 className="head-title">Florence <br/> agency</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat ratione vel, voluptate laborum omnis voluptatibus nobis quis quia, magnam ipsum, nemo tempore debitis assumenda.</p>
                    <button type="button" class="btn btn-primary">See Pricing</button>
                </div>
                <div className="p-5 col-md-6">
                    <img src={headerImg} height="500" width="500" alt=""/>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;