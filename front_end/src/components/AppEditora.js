import React, { Component } from "react";
import MyFormEditora from "./MyFormEditora";
import EditoraLista from "./EditoraLista";
import axios from 'axios';
//import "./App.css";

class AppEditora extends Component{

    state={
        editoras: [],
        editora:{},
        loader : false,
        url: "http://localhost:8000/editoras",
        
    };

    getEditoras = async() => {
        this.setState({loader:true});
        const editoras = await axios.get(this.state.url);
        this.setState({editoras: editoras.data, loader:false});
    };

    deleteEditoras = async id => {
        this.setState({loader:true});
        
        await  axios.delete(`${this.state.url}/${id}`)
        .then(res => {
            if (res.data === 'ok')
             alert("Editora removida com sucesso!");
        }).catch(err => {
            alert("Editora não pode ser removida, pois está cadastrado em algum Livro!");        })
 
        this.getEditoras();
    };

    createEditora = async (data) => {
        this.setState({loader:true});
        await axios.post(this.state.url, {
           nomeEditora:data.nomeEditora
        });
        alert("Editora inserida com sucesso!");
        this.getEditoras();
    };

    editEditora = async (data) => {
        this.setState({editora: {},loader:true});
        await axios.put(`${this.state.url}/${data.id}`, {
            nomeEditora: data.nomeEditora
        });
        alert("Editora editada com sucesso!");
        this.getEditoras();
    };

    componentDidMount(){
        this.getEditoras();
    }

    onDelete = id => {
        
        this.deleteEditoras(id);
        
        //        console.log("App: ",id);
    };

    onEdit = data => {
       this.setState({editora : data});
    };

    onFormSubmit = (data) => {
       if(data.isEdit){
            this.editEditora(data);
       }else{
           this.createEditora(data);
       }

    };

    render(){
        return(
            <div>
                <div className="ui main container">
                    <MyFormEditora 
                    editora={this.state.editora}
                    onFormSubmit={this.onFormSubmit}
                    />
                    <EditoraLista editoras = {this.state.editoras}
                    onDelete={this.onDelete} 
                    onEdit={this.onEdit}/>    
                </div>    
            </div>
        );
    }
}

export default AppEditora;