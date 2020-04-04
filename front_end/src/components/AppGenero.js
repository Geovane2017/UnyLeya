import React, { Component } from "react";
import MyFormGenero from "./MyFormGenero";
import GeneroLista from "./GeneroLista";
import axios from 'axios';
//import "./App.css";

class AppGenero extends Component{

    state={
        generos: [],
        genero:{},
        loader : false,
        url: "http://localhost:8000/generos",
        
    };

    getGeneros = async() => {
        this.setState({loader:true});
        const generos = await axios.get(this.state.url);
        this.setState({generos: generos.data, loader:false});
    };

    deleteGeneros = async id => {
        this.setState({loader:true});
        await  axios.delete(`${this.state.url}/${id}`)
        .then(res => {
            if (res.data === 'ok')
             alert("Gênero removido com sucesso!");
        }).catch(err => {
            alert("Gênero não pode ser removido, pois está cadastrado em algum Livro!");        })
        this.getGeneros();
    };

    createGenero = async (data) => {
        this.setState({loader:true});
        await axios.post(this.state.url, {
            genero:data.genero
        });
        alert("Gênero adicionado com sucesso!");
        this.getGeneros();
    };

    editGenero = async (data) => {
        this.setState({genero: {},loader:true});
        await axios.put(`${this.state.url}/${data.id}`, {
            genero: data.genero
        });
        alert("Gênero editado com sucesso!");
        this.getGeneros();
    };

    componentDidMount(){
        this.getGeneros();
    }

    onDelete = id => {
        this.deleteGeneros(id);
        //        console.log("App: ",id);
    };

    onEdit = data => {
       this.setState({genero : data});
    };

    onFormSubmit = (data) => {
       if(data.isEdit){
            this.editGenero(data);
       }else{
           this.createGenero(data);
       }

    };

    render(){
        return(
            <div>
                <div className="ui main container">
                    <MyFormGenero 
                    genero={this.state.genero}
                    onFormSubmit={this.onFormSubmit}
                    />
                    <GeneroLista generos = {this.state.generos}
                    onDelete={this.onDelete} 
                    onEdit={this.onEdit}/>    
                </div>    
            </div>
        );
    }
}

export default AppGenero;