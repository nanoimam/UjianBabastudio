import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Kursuslist from './components/Kursuslist';
import Footer from './components/Footer';



function App() {
  return (
    
    <React.Fragment>
      <Navbar />
      <Slider />
      <Switch>
        <Route exact path="/" component={Kursuslist} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
