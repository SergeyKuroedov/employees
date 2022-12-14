import EmployeesListItem from "../employees-list-item/Employees-list-item";
import './employees-list.css'

const Employeeslist = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                onDelete={()=>onDelete(id)} 
                key={id} 
                {...itemProps}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default Employeeslist;