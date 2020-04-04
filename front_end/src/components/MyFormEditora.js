import React, {Component} from 'react';

class MyFormEditora extends Component{
    state = {
        form: {nomeEditora: "", isEdit:false},
        btnName: "Salvar",
        btnClass:"ui primary button submit-button"
    };

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };

    componentDidUpdate(prevProps){
        if(prevProps !== this.props && !this.isEmpty(this.props.editora)){
            this.setState({
                form: { ...this.props.editora, isEdit:true},
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
        if(document.getElementsByName("nomeEditora")[0].value === "") {
            alert("Entre com o nome da Editora");
            return false;
        }
        return true;
    };

    clearFormFields = () => {
        this.setState({
            form: {nomeEditora: "", isEdit:false}
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
                        <label>Editora</label>
                        <input type="text" name="nomeEditora" placeholder="Digite o nome da Editora"
                        onChange={this.handleChange}
                        value={this.state.form.nomeEditora}
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

export default MyFormEditora;