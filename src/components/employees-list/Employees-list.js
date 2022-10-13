import EmployeesListItem from "../employees-list-item/Employees-list-item";
import './employees-list.css'

const Employeeslist = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
}

export default Employeeslist;