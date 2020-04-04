import React, {Component} from 'react';
import Genero from "./Genero";

class GeneroLista extends Component{
    onDelete = id => {
        this.props.onDelete(id);
        //console.log('Deletando: ',id);
    }

    onEdit = data => {
        this.props.onEdit(data);
       //console.log('Editando: ',id);
    }
    render(){
        const generos = this.props.generos;
        return(
            <div className="data">
                <table className="ui called table">
                    <thead>
                        <tr>
                            <th style={{width: "80px", textAlign: "left"}}>Código</th>
                            <th style={{width:"315px"}}>Gênero</th>
                            <th style={{width:"-200px"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos.map(genero => {
                            return <Genero
                             generos = {genero} 
                             key={genero.id}
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

export default GeneroLista;    