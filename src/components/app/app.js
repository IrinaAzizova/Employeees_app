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
            ]
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

    render() {
        const totalEmployees = this.state.employeesData.length;
        const increaseLength = this.state.employeesData.filter(item => item.increase).length;
        
        return (
            <div className="app">
                <AppInfo
                    length={totalEmployees}
                    increaseLength={increaseLength}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.employeesData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm
                    onAdd={this.addEmployee}/>
            </div>
        );
    }
}

export default App;