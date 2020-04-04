import React, {Component} from 'react';
import Autor from "./Autor";

class AutorLista extends Component{
    onDelete = id => {
        this.props.onDelete(id);
        //console.log('Deletando: ',id);
    }

    onEdit = data => {
        this.props.onEdit(data);
       //console.log('Editando: ',id);
    }
    render(){
        const autores = this.props.autores;
        return(
            <div className="data">
                <table className="ui called table">
                    <thead>
                        <tr>
                            <th style={{width: "200px"}}>Código</th>
                            <th style={{width: "400px"}}>Autor</th>
                            <th style={{width: "400px"}}>Ano de Nascimento</th>
                            <th style={{width: "200px"}}>Sexo</th>
                            <th style={{width: "200px"}}>Nacionalidade</th>
                            <th style={{width:"600px"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map(autor => {
                            return <Autor
                             autores = {autor} 
                             key={autor.id}
                             onDelete={this.onDelete}
                             onEdit={this.onEdit}
                         />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AutorLista;    