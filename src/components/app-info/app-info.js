import './app-info.css';

const AppInfo = ({length, increaseLength}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "Рога и копыта"</h1>
            <h2>Общее число сотрудников: {length}</h2>
            <h2>Премию получат: {increaseLength}</h2>
        </div>
    );
};

export default AppInfo;