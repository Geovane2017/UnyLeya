import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import Livro from "./Livro";

class AppLivro extends Component{
    constructor(props){
        super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.onChangeTitulo=this.onChangeTitulo.bind(this);  
    this.onChangeAno=this.onChangeAno.bind(this);    
  
    this.state={
        livros: [],
        livro:{},
        isEdit:false,
        autores: [],
        generos: [],
        editoras:[],
        id : this.props.id,
        autor_id : this.props.autor_id,
        genero_id : this.props.genero_id, 
        editora_id : this.props.editora_id, 
        titulo:"",
        ano_lancamento:this.props.ano_lancamento,
        loader : false,
        urlLivro: "http://localhost:8000/livros",
        urlAutor: "http://localhost:8000/autores",
        urlGenero: "http://localhost:8000/generos",
        urlEditora: "http://localhost:8000/editoras",

        btnName: "Salvar",
        btnClass:"ui primary button submit-button"
        
    };
}

getLivros = async() => {
    this.setState({loader:true});
    const livros = await axios.get("http://localhost:8000/livros");
    this.setState({livros: livros.data, loader:false});
};


isEmpty(obj){
    return Object.entries(obj).length === 0 && obj.constructor === Object;
};



componentDidUpdate(prevProps, prevState){
    if(prevState.livro !== this.state.livro){
        this.setState({
            isEdit:true,
            titulo: this.state.livro.titulo,
            ano_lancamento:this.state.livro.ano_lancamento,
            btnName: "Editar",
            btnClass: "ui orange button submit-button"
        });
    }
};
    componentDidMount(){
        
        this.getAutores();
        this.getGeneros();
        this.getEditoras();
        this.getLivros();
}
    onChangeTitulo(e)
    {
      this.setState({
        titulo:e.target.value
      });

    }

    onChangeAno(e)
    {
      this.setState({
        ano_lancamento:e.target.value
      });

    }

    clearFormFields = () => {
        this.setState({ 
            titulo:"",
            ano_lancamento:"",
            isEdit:false
        });
        this.setState({
            btnName:"Salvar",
            btnClass:"ui primary button submit-button"
        });
        this.getLivros();
       document.querySelector(".form").reset();
    };

   
    getAutores = async() => {
        this.setState({loader:true});
        const autores = await axios.get(this.state.urlAutor);
        this.setState({autores: autores.data, loader:false});
    };


    getGeneros = async() => {
        this.setState({loader:true});
        const generos = await axios.get(this.state.urlGenero);
        this.setState({generos: generos.data, loader:false});
    };

    getEditoras = async() => {
        this.setState({loader:true});
        const editoras = await axios.get(this.state.urlEditora);
        this.setState({editoras: editoras.data, loader:false});
    };

    
    funcaoIDAutor(valor){
        this.setState({
            autor_id: valor
        });
    }
    
    funcaoIDGenero(valor){
        this.setState({
            genero_id: valor
        });    
    }

    funcaoIDEditora(valor){
        this.setState({
            editora_id: valor
        });
 
    }

    onEdit = data => {
       
        this.setState({livro : data, isEdit:true, id:data.id});
        this.setState({autor_id:data.autor_id});
     };
    
     editLivro = async (data) => {
        data.preventDefault();
        this.setState({livro: {},loader:true});
       await axios.put(`${this.state.urlLivro}/${this.state.id}/`,{
        titulo:this.state.titulo,
        autor_id:this.state.autor_id,
        genero_id:this.state.genero_id,
        editora_id:this.state.editora_id,
        ano_lancamento:this.state.ano_lancamento,
        });
        alert("Livro editado com sucesso!");
        this.clearFormFields();
        this.getLivros();
       
    };


    createLivro = async (data) => {
        data.preventDefault();
        this.setState({loader:true});
        const livro={
            titulo:this.state.titulo,
            autor_id:this.state.autor_id,
            genero_id:this.state.genero_id,
            editora_id:this.state.editora_id,
            ano_lancamento:this.state.ano_lancamento,
            
        }
        alert("Livro adicionado com sucesso!");
        await axios.post('http://localhost:8000/livros/',livro);
        this.clearFormFields();
        this.getLivros();
    };

    formValidation = () => {
        if(this.state.titulo === "" || this.state.autor_id === "" || this.state.genero_id === "" || this.state.editora_id === "") {
            alert("Entre com todos os dados");
            return false;
        }
        return true;
    };

    onSubmit = (data2) => {
        this.setState({loader:true});
        if(this.formValidation()){
            if(this.state.isEdit){
                this.editLivro(data2);
            }
            else{
                this.createLivro(data2);
            }   
        }
};

 
 onDelete = id => {
    this.deleteLivros(id);
    this.getLivros();
};

 deleteLivros = async id => {
    this.setState({loader:true});
   await  axios.delete(`${this.state.urlLivro}/${id}`);
    alert("Livro removido com sucesso!");
    this.getLivros();
};
    render(){
        return(
            <div>
                <div className="ui main container">
                    
                <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Livro</label>
                        <input type="text" name="titulo" placeholder="Digite o título do Livro"
                        onChange={this.onChangeTitulo}
                        value={this.state.titulo}
                        />
                    </div>

                    <div className="four wide field">
                        <label>Ano de Lançamento</label>
                        <input type="text" name="ano_lancamento" placeholder="Digite o ano de lançamento"
                        onChange={this.onChangeAno}
                        value={this.state.ano_lancamento}
                        />
                    </div>

                    <div className="ui main containerAutor">
                    <select  >
                            
                            <option value="">Selecionar Autor</option>
                            { 
                            this.state.autores.map((row)=>(
                                <option onClick={()=>this.funcaoIDAutor(row.id)} >{row.nomeAutor}</option>
                    ))
                            }
                        </select>
                    </div>
                    <div className="ui main containerGenero">        

                        <select  >
                                    
                                    <option value="">Selecionar Gênero</option>
                                    { 
                                    this.state.generos.map((row)=>(
                                        <option onClick={()=>this.funcaoIDGenero(row.id)} >{row.genero}</option>
                            ))
                                    }
                        </select>
                    </div>
                    <div className="ui main containerEditora">    
                        <select  >
                                    
                                    <option value="">Selecionar Editora</option>
                                    { 
                                    this.state.editoras.map((row)=>(
                                        <option onClick={()=>this.funcaoIDEditora(row.id)} >{row.nomeEditora}</option>
                            ))
                                    }
                        </select>
             </div>          

                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onSubmit}>
                            {this.state.btnName}
                        </button>
                    </div>
                </div>
            </form> 
            <thead>
                <tr>
                    <th style={{width: "10px", height:"50px",textAlign: "left"}}>Código</th>
                    <th style={{width:"200px"}}>Título</th>
                    <th style={{width:"200px"}}>Ano de Lançamento</th>
                    <th style={{width:"200px"}}>Autor</th>
                    <th style={{width:"200px"}}>Gênero</th>
                    <th style={{width:"200px"}}>Editora</th>
                    <th style={{width:"200px"}}>Ação</th>
                </tr>
            </thead>
           
            <tbody>
                        {this.state.livros.map(livro => {
                            return <Livro
                            livros = {livro} 
                            key={livro.id}
                            onDelete={this.onDelete} 
                            onEdit={this.onEdit}
                         />;
                        })}
                    </tbody> 
         

                 </div> 
        </div>
         
         
        );
    }
}

export default AppLivro;