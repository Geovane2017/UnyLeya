import React, {Component} from 'react';

class Genero extends Component{
    onDelete = () => {
        this.props.onDelete(this.props.generos.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.generos);   
    };

    render(){
        const {id, genero} = this.props.generos;
        return(
            <tr>
                <td style={{textAlign:"left"}}>{`${id}`}</td>
                <td>{`${genero}`}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Editar</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Excluir</button>
                </td> 
            </tr>
            
        );
    }

}

export default Genero;
