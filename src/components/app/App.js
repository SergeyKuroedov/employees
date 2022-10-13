import './App.css';
import '../search-panel/search-panel.css'
import '../app-info/App-info'
import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import Employeeslist from '../employees-list/Employees-list';
import EmployeesAddForm from '../employees-add-form/Employees-add-form';


function App() {
	return (
		<div className="App">
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />.
			</div>

			<Employeeslist />
			<EmployeesAddForm />
		</div>

	);
}

export default App;
