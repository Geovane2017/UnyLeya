import React, { } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppGenero from './components/AppGenero';
import AppEditora from './components/AppEditora';
import AppLivro from './components/AppLivro';
import AppAutor from './components/AppAutor';
import Inicio from './components/Inicio';
import { BrowserRouter, Route} from 'react-router-dom'; 


ReactDOM.render(
<BrowserRouter>
<App/>
<Route path="/inicio" component={Inicio}/>
<Route path="/autores" component={AppAutor}/>
<Route path="/generos" component={AppGenero}/>
<Route path="/editoras" component={AppEditora}/>
<Route path="/livros" component={AppLivro}/>

</BrowserRouter>,
 

document.querySelector("#root"));
//<Route path="/inicio" component={Inicio}/>
