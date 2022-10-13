import './App.css';
import '../search-panel/search-panel.css'
import '../app-info/App-info'
import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';


function App() {
  return (
    <div className="App">
      <AppInfo />

      <div className='search-panel'>
			<SearchPanel />
			<AppFilter />.
      </div>

    </div>

  );
}

export default App;
