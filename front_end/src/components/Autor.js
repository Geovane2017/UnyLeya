import React, {Component} from 'react';

class Autor extends Component{
    onDelete = () => {
        this.props.onDelete(this.props.autores.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.autores);   
    };

    render(){
        const {id, nomeAutor, ano_nascimento, sexo, nacionalidade} = this.props.autores;
        return(
            <tr>
                <td style={{textAlign:"left"}}>{`${id}`}</td>
                <td>{`${nomeAutor}`}</td>
                <td>{`${ano_nascimento}`}</td>
                <td>{`${sexo}`}</td>
                <td>{`${nacionalidade}`}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Editar</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Excluir</button>
                </td> 
            </tr>
            
        );
    }

}

export default Autor;
