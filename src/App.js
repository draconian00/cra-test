import './App.css';
import TodoList from './components/Todo/TodoList';

function App() {  

  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
  console.log(`REACT_APP_PATH = ${process.env.REACT_APP_PATH}`);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
