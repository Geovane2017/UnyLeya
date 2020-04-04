import React, {Component} from 'react';
import Editora from "./Editora";

class EditoraLista extends Component{
    onDelete = id => {
        this.props.onDelete(id);
        //console.log('Deletando: ',id);
    }

    onEdit = data => {
        this.props.onEdit(data);
       //console.log('Editando: ',id);
    }
    render(){
        const edit = this.props.editoras;
        return(
            <div className="data">
                <table className="ui called table">
                    <thead>
                        <tr>
                            <th style={{width: "80px", textAlign: "left"}}>Código</th>
                            <th style={{width:"315px"}}>Editora</th>
                            <th style={{width:"-200px"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edit.map(editora => {
                            return <Editora
                            editoras = {editora} 
                             key={editora.id}
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

export default EditoraLista;    