import './app-filter.css';

const AppFilter = (props) => {
    
    const btnsData = [
        {filter: 'all', text: 'Все сотрудники'},
        {filter: 'like', text: 'На повышение'},
        {filter: 'salary', text: 'З/П больше 1000$'}
    ]

    const btns = btnsData.map(({filter, text}) => {
        const clazz = filter === props.filter ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button 
                className={'btn ' + clazz} 
                type='button'
                data-filter={filter}
                key={filter}
                onClick={() => {props.onUpdateByFilter(filter)}}>
                    {text}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    );
};

export default AppFilter;