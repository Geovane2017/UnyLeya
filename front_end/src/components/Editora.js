import React, {Component} from 'react';

class Editora extends Component{
    onDelete = () => {
        this.props.onDelete(this.props.editoras.id);
    };

    onEdit = () => {
        this.props.onEdit(this.props.editoras);   
    };

    render(){
        const {id, nomeEditora} = this.props.editoras;
        return(
            <tr>
                <td style={{textAlign:"left"}}>{`${id}`}</td>
                <td>{`${nomeEditora}`}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Editar</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Excluir</button>
                </td> 
            </tr>
            
        );
    }

}

export default Editora;
