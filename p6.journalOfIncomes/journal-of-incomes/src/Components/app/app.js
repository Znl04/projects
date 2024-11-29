import AppInfo from "../app-info/app-info";
import AppFiler from "../app-filter/app-filter";
import IncomesList from "../incomes-list/incomes-list";
import IncomesAddForm from "../incomes-add-form/incomes-add-form";
import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <AppFiler/>
      <IncomesList/>
      <IncomesAddForm/>
    </div>
  );
}

export default App;