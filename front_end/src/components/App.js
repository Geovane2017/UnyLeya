import React, { Component } from "react";
import "./App.css";
import logo from './logo.jpeg'; // Tell webpack this JS file uses this image

import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <div>
                <div className="ui fixed inverted menu">
                   <div className="ui container">
                   <Link to="/inicio">
                        <a className="header item" href="/#"> Início</a>  
                    </Link>

                    <Link to="/autores">
                        <a className="header item" href="/#"> Autores</a>  
                    </Link>

                    <Link to="/editoras">
                        <a className="header item" href="/#"> Editoras </a>  
                    </Link>

                    <Link to="/generos">
                        <a className="header item" href="/#"> Gêneros Literários</a>  
                    </Link>

                    <Link to="/livros">
                        <a className="header item" href="/#"> Livros</a>  
                    </Link>
                   
                </div>
            </div>
        </div>
        );
    }
}

export default App;