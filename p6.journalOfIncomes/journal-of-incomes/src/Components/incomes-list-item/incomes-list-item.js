import "./incomes-list-item.css"

const IncomesListItem = () => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        
        <span className="list-group-item-label">150000</span>
        <span className="list-group-item-label list-item-categorie">З/п</span>
        <small className="text-muted d-block">2024-11-30</small>
        
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default IncomesListItem;