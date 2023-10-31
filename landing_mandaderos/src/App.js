import React from "react";
import logo from './logo.svg';
import './bootstrap.css';
import { Header } from './Header';
import { Slider } from './Slider';
import { Welcome } from './Welcome';
import { Services } from './Services';
import { Team } from './Team';
import { Testimonial } from './Testimonial';
import { Foother } from './Foother';
import { NavBar } from './NavBar';

function App() {
  return (
    
    <div className="App">
        <Header />
        <NavBar />
        <Slider />
        <Welcome />
        <Services />
        <Team />
        <Testimonial />
        <Foother />
    </div>
  );
}

export default App;
