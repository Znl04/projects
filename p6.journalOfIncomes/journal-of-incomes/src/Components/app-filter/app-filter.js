import "./app-filter.css";

const AppFiler = () => {
  return (
    <div className="app-filter">
      <div className="btn-group">
      <button className="btn btn-light"
      type="button"> Все расходы
      </button>
      <button className="btn btn-outline-light"
      type="button"> На еду
      </button>
      <button className="btn btn-outline-light"
      type="button"> На развлечения/отдых
      </button>
    </div>
    </div>
  );
}

export default AppFiler;