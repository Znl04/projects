import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h1>Контролируйте свой доход!</h1>
}

const Field = () => {
  return <input type="number" placeholder='Введите сумму'/>
}

const BtnSubmit = () => {
  return <button>Подтвердить</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <BtnSubmit/>
    </div>
  );
}

export default App;
