import "./incomes-add-form.css"

const IncomesAddForm = () => {
  return (
    <div className="app-add-form">
            <h3>Добавьте расход</h3>
            <form
                className="add-form d-flex">
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Введите сумму" />
                <input type="date" min="2024-01-01" max="2024-12-31"
                    className="form-control new-post-label"
                    placeholder="Введите дату" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
  );
}

export default IncomesAddForm;