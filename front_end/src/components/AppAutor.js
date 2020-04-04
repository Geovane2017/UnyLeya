import React, { Component } from "react";
import MyFormAutor from "./MyFormAutor";
import AutorLista from "./AutorLista";
import axios from 'axios';
import "./App.css";

class AppAutor extends Component{

    state={
        autores: [],
        autor:{},
        loader : false,
        url: "http://localhost:8000/autores",
        
    };

    getAutores = async() => {
        this.setState({loader:true});
        const autores = await axios.get(this.state.url);
        this.setState({autores: autores.data, loader:false});
    };

    deleteAutores = async id => {
        this.setState({loader:true});
        
        await  axios.delete(`${this.state.url}/${id}`)
        .then(res => {
            if (res.data === 'ok')
             alert("Autor removido com sucesso!");
        }).catch(err => {
            alert("Autor não pode ser removido, pois está cadastrado em algum livro!");        })
 
        this.getAutores();
    };

    createAutor = async (data) => {
        this.setState({loader:true});
        await axios.post(this.state.url, {
            nomeAutor:data.nomeAutor,
            ano_nascimento:data.ano_nascimento,
            sexo:data.sexo,
            nacionalidade:data.nacionalidade
        });
        alert("Autor inserido com sucesso!");
        this.getAutores();
    };

    editAutor = async (data) => {
        this.setState({autor: {},loader:true});
        await axios.put(`${this.state.url}/${data.id}`, {
            nomeAutor:data.nomeAutor,
            ano_nascimento:data.ano_nascimento,
            sexo:data.sexo,
            nacionalidade:data.nacionalidade
        });
        alert("Autor editado com sucesso!");
        this.getAutores();
    };

    componentDidMount(){
        this.getAutores();
    }

    onDelete = id => {
        
        this.deleteAutores(id);
        
        //        console.log("App: ",id);
    };

    onEdit = data => {
       this.setState({autor : data});
    };

    onFormSubmit = (data) => {
       if(data.isEdit){
            this.editAutor(data);
       }else{
           this.createAutor(data);
       }

    };

    render(){
        return(
            <div>
                <div className="ui main container">
                    <MyFormAutor 
                    autor={this.state.autor}
                    onFormSubmit={this.onFormSubmit}
                    />
                    <AutorLista autores = {this.state.autores}
                    onDelete={this.onDelete} 
                    onEdit={this.onEdit}/>    
                </div>    
            </div>
        );
    }
}

export default AppAutor;