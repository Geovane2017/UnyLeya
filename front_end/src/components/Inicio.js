
import React, { Component } from 'react';
import logo from './logo.jpeg'; // Tell webpack this JS file uses this image
import "./App.css";


class Inicio extends Component{
    render(){
        return (
            <img 
            src={logo}
            alt="Logo"
            vspace="40px"
            hspace="3px"
            width="1020px" 
            height="623px"
            Texto
            />

        );
    }    
}

export default Inicio;