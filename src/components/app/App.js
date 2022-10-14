import './App.css';
import '../search-panel/search-panel.css'
import '../app-info/App-info'
import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import Employeeslist from '../employees-list/Employees-list';
import EmployeesAddForm from '../employees-add-form/Employees-add-form';


function App() {

	const data = [
		{name: 'John C.', salary: 1000, increase: false, id: 1},
		{name: 'Alex M.', salary: 12000, increase: true, id: 2},
		{name: 'Michel S.', salary: 5000, increase: false, id: 3},
	];

	return (
		<div className="App">
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />.
			</div>

			<Employeeslist data={data}/>
			<EmployeesAddForm />
		</div>

	);
}

export default App;
