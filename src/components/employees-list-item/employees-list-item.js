import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: this.props.salary
        }
    }

    onChangeSalary = (event) => {
        this.setState(() => {
            const input = parseFloat((event.target.value).replace(/\$/g, ''));
            const sum = isNaN(input) ? 0 : input;
            this.props.onChangeSalary(sum, this.props.name);
            return {
                sum: sum
            }
        });
    }

    render() {
        const {name, onDelete, onToggleProp, increase, like} = this.props;
        const {sum} = this.state;

        let active ='',
            star = '';

        if (increase) active = ' increase';

        if (like) star = ' like';

        return (
            <li className={"list-group-item d-flex justify-content-between" + active + star}>
                <span className="list-group-item-label"
                        onClick={onToggleProp}
                        data-toggle='like'>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    value={sum + '$'}
                    onChange={this.onChangeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    

    
};

export default EmployeesListItem;