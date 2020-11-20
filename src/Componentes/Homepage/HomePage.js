import React from 'react';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import NavBar from '../NavBar/NavBar';

const HomePage = () => {
    return (
        <div> 
            <NavBar></NavBar>
            <MainHeader /> 
             <Footer></Footer>
        </div>
    );
};

export default HomePage;