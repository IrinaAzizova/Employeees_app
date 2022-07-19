import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem
                key={id}
                {...itemProps}/* name={item.name} 
                                 salary={item.salary} */
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={onChangeSalary}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;