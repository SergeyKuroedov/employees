import { Component } from 'react';

import './App.css';
import '../search-panel/search-panel.css'
import '../app-info/App-info'
import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import Employeeslist from '../employees-list/Employees-list';
import EmployeesAddForm from '../employees-add-form/Employees-add-form';


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data : [
				{ name: 'John C.', salary: 1000, increase: false, like: true, id: 1 },
				{ name: 'Alex M.', salary: 12000, increase: false, like: false, id: 2 },
				{ name: 'Michel S.', salary: 5000, increase: false, like: false, id: 3 },
			],
			term: '',
			filter: 'all'
		};
		this.maxId = 4;
	}

	onDelete = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}


	addElement = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.maxId++
		}
		
		this.setState(({data}) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})		
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => {
			return {
				data: data.map(item => {
					if(item.id === id) {
						return {...item, [prop]: !item[prop]}
					}
					return {...item}
				})
			}
		})
	}

	searchEmp = (arr, term) => {
		if (term.length === 0) {
			return arr;
		}

		return arr.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	filterPost = (items, filter) => {
		switch(filter){
			case 'like':
				return items.filter(item => item.like)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter})
	}

	

	render() {
		const {data, term, filter} = this.state
		const increased = data.filter(item => item.increase === true).length
		const employees = data.length
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)
		return (
			<div className="App">
				<AppInfo 
					increased={increased}
					employees={employees}/>

				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter 
						filter={filter}
						onFilterSelect={this.onFilterSelect}/>.
				</div>

				<Employeeslist  
					onDelete={this.onDelete} 
					data={visibleData} 
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm 
					addElement={this.addElement}/>
			</div>

		);
	}

}

export default App;
