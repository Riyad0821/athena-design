import React from 'react';
import './App.css';

import Service from './components/Home/Service/Service';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Componentes/Homepage/HomePage';
import { Nav } from 'react-bootstrap';
import NavBar from './Componentes/NavBar/NavBar';
import MainHeader from './Componentes/MainHeader/MainHeader';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MainHeader></MainHeader>
      <Service/>

    </div>
  );
}

export default App;
