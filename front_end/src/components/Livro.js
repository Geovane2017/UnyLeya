import React, {Component} from 'react';

class Livro extends Component{
    onDelete = () => {
        this.props.onDelete(this.props.livros.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.livros); 
    };

    render(){
        const { titulo, nomeAutor, genero,id, nomeEditora,ano_lancamento} = this.props.livros;
        return(
                    <tr>
                        <td style={{height:"50px",textAlign: "left"}}>{`${id}`}</td>
                        <td style={{textAlign:"center"}}>{`${titulo}`}</td>
                        <td style={{textAlign:"center"}}>{`${ano_lancamento}`}</td>
                        <td style={{textAlign:"center"}}>{`${nomeAutor}`}</td>
                        <td style={{textAlign:"center"}}>{`${genero}`}</td>
                        <td style={{textAlign:"center"}}>{`${nomeEditora}`}</td>
                        <td>
                        <button className="mini ui blue button" onClick={this.onEdit}>Editar</button>
                            <button className="mini ui red button" onClick={this.onDelete}>Excluir</button>
                        </td> 
                    </tr>
                
        );
    }

}

export default Livro;
