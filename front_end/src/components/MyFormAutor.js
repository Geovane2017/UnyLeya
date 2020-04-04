import React, {Component} from 'react';

class MyFormAutor extends Component{
    state = {
        form: {nomeAutor: "", ano_nascimento:"", sexo:"" , nacionalidade:"", isEdit:false},
        btnName: "Salvar",
        btnClass:"ui primary button submit-button"
    };

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };

    componentDidUpdate(prevProps){
        if(prevProps !== this.props && !this.isEmpty(this.props.autor)){
            this.setState({
                form: { ...this.props.autor, isEdit:true},
                btnName: "Editar",
                btnClass: "ui orange button submit-button"
            });
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    };

    onFormSubmit = event => {
        event.preventDefault();
        if(this.formValidation())
        {
           this.props.onFormSubmit(this.state.form);
        }
        this.clearFormFields();
    };

    formValidation = () => {
        if(document.getElementsByName("nomeAutor")[0].value === "") {
            alert("Entre com o nome do Autor");
            return false;
        }
        return true;
    };

    clearFormFields = () => {
        this.setState({
            form: {nomeAutor: "", isEdit:false}
        });
        this.setState({
            btnName:"Salvar",
            btnClass:"ui primary button submit-button"
        });

        document.querySelector(".form").reset();
    };

    render (){
        return(
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Autor</label>
                        <input type="text" name="nomeAutor" placeholder="Digite o nome do Autor"
                        onChange={this.handleChange}
                        value={this.state.form.nomeAutor}
                        />
                    </div>

                    <div className="four wide field">
                        <label>Ano de Nascimento</label>
                        <input type="text" name="ano_nascimento" placeholder="Digite o ano de nascimento"
                        onChange={this.handleChange}
                        value={this.state.form.ano_nascimento}
                        />
                    </div>

                    <div className="four wide field">
                        <label>Sexo</label>
                        <input type="text" name="sexo" placeholder="Digite o sexo do Autor"
                        onChange={this.handleChange}
                        value={this.state.form.sexo}
                        />
                    </div>

                    <div className="four wide field">
                        <label>Nacionalidade</label>
                        <input type="text" name="nacionalidade" placeholder="Digite a nacionalidade"
                        onChange={this.handleChange}
                        value={this.state.form.nacionalidade}
                        />
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                            {this.state.btnName}
                        </button>
                    </div>
                </div>
            </form>    
        );
    }
}

export default MyFormAutor;