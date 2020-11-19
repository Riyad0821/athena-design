import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componentes/Homepage/HomePage';
import { Nav } from 'react-bootstrap';
import NavBar from './Componentes/NavBar/NavBar';
import MainHeader from './Componentes/MainHeader/MainHeader';
import Service from './Componentes/Service/Service';
import ContactUs from './Componentes/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MainHeader></MainHeader>
      <Service></Service>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
