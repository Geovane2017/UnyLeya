import React, { Component } from "react";
import "./App.css";
import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <div>
                <div className="ui fixed inverted menu">
                  <div className="ui container">

                  <Link to="/inicio">
                    <a className="header item">
                          Início
                    </a>  
                    
                </Link>

                <Link to="/autores">
                    <a className="header item">
                          Autores  
                    </a>  
                </Link>

                <Link to="/editoras">
                    <a className="header item">
                          Editoras
                    </a>  
                </Link>

                <Link to="/generos">
                    <a className="header item">
                          Gêneros Literários
                    </a>  
                </Link>

                
                <Link to="/livros">
                    <a className="header item">
                          Livros
                    </a>  
                </Link>

            
                  </div>
                </div>
            </div>
        );
    }
}

export default App;