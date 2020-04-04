import React, { Component } from 'react';
import logo from './logo.jpeg'; // Tell webpack this JS file uses this image
import "./App.css";


class Inicio extends Component{
    render(){
        return (
            <div>
            <h2>Bem vindo à Biblioteca Digital</h2>
            <img 
                     src={logo}
                     alt="Logo"
                     vspace="50px"
                     hspace="200px"
                     width="800px" 
                     height="400px"
                     
                     />
            </div>
        );
    }    
}

export default Inicio;
