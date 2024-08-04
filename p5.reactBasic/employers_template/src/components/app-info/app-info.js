
import './app-info.css'

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании КТЖ</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получать: {increased}</h2>
    </div>
  );
}

export default AppInfo;