import { Component } from 'react';

import './employees-add-form.css';

class EmploeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.title = 'Добавьте нового сотрудника'
        this.state = {
            name: '',
            salary: '',
            title: this.title
        };
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.name.length >= 3 && this.state.salary >= 100) {
                this.props.onAdd(this.state.name, this.state.salary);     
                this.setState({
                    title: this.title
                })       
        } else {
            this.setState({
                title: 'введите корректные данные'
            })
        }
        this.setState({
            name: '',
            salary: ''
        })     
    }

    render() {
        const {name, salary, title} = this.state;
        return (
            <div className="app-add-form">
                <h3>{title}</h3>
                <form 
                    className="add-form d-flex"                    
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">
                                Добавить
                    </button>
                </form>
            </div>
        );
    }    
};

export default EmploeesAddForm;