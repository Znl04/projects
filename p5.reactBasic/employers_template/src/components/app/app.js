import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    {name: "John S.", salary: 500, increase: false},
    {name: "Alex M.", salary: 1200, increase: true},
    {name: "Carl W.", salary: 1000, increase: false}
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployersList data={data} />
      <EmployersAddForm/> 
    </div>
  );
}

export default App;