import IncomesListItem from "../incomes-list-item/incomes-list-item";
import "./incomes-list.css";

const IncomesList = () => {
  return (
    <ul className="app-list list-group">
      <IncomesListItem/>
    </ul>
  );
}

export default IncomesList;