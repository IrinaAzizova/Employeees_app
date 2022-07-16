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
                {name: 'John Doe', salary: '1000', increase: false, id: 1},
                {name: 'Tom Smith', salary: '800', increase: true, id: 2},
                {name: 'Helen Fox', salary: '6000', increase: false, id: 3}
            ]
        };
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
        console.log(this.state.employeesData);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.employeesData}
                    onDelete={this.deleteItem}/>
                <EmploeesAddForm/>
            </div>
        );
    }
}

export default App;