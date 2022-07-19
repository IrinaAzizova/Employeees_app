import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmploeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesData: [
                {name: 'John Doe', salary: '1000', increase: false, like: true, id: 1},
                {name: 'Tom Smith', salary: '800', increase: true, like: false, id: 2},
                {name: 'Helen Fox', salary: '6000', increase: false, like: false, id: 3}
            ],
            term: '',
            filterProp: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({employeesData}) => {
            /* const index = employeesData.findIndex(dataItem => dataItem.id === id);
            const before = employeesData.slice(0, index);
            const after = employeesData.slice(index + 1);
            const newArr = [...before, ...after]; */
            return {
                employeesData:  employeesData.filter(dataItem => dataItem.id !== id)
            };
        });
    }

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
    
        this.setState(({employeesData}) => {
            const newArr = [...employeesData, newEmployee];
            return {
                employeesData: newArr
            };
        })
    }

    /* onToggleIncrease = (id) => {
        this.setState(({employeesData}) => {
            const index = employeesData.findIndex(item => item.id === id);
            const old = employeesData[index];
            const newObj = {...old, increase: !old.increase};
            const newArr = [...employeesData.slice(0, index), newObj, ...employeesData.slice(index + 1)];
            return {
                employeesData: newArr
            };
        })
    }*/

    onToggleProp = (id, prop) => {
        this.setState(({employeesData}) => ({
            employeesData: employeesData.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.indexOf(term) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        });
    }

    filterEmployee = (items, filterProp) => {
        switch (filterProp) {
            case 'like': 
                return items.filter( item => item.like);
            case 'salary':
                return items.filter(item => +item.salary > 1000);
            default: 
                return items;
        }
    }

    onUpdateByFilter =(filter) => {
        this.setState({
            filterProp: filter
        })
    }

    onChangeSalary = (sum, name) => {
        this.setState({
            employeesData: this.state.employeesData.map(item => {
                if (item.name === name) {
                    return {...item, salary: sum};
                }
                return item;
            })
        });
    }

    render() {
        const {employeesData, term, filterProp} = this.state;
        const totalEmployees = this.state.employeesData.length;
        const increaseLength = this.state.employeesData.filter(item => item.increase).length;

        const visibleData = this.filterEmployee(this.searchEmployee(employeesData, term), filterProp);
        return (
            <div className="app">
                <AppInfo
                    length={totalEmployees}
                    increaseLength={increaseLength}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filterProp}
                        onUpdateByFilter={this.onUpdateByFilter}/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}/>
                <EmploeesAddForm
                    onAdd={this.addEmployee}/>
            </div>
        );
    }
}

export default App;