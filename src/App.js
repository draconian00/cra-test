import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

import { stringPadStart } from './util';

function App(props) {  
  /* data */
  const tt = stringPadStart('test', 10, '0');
  const buttonStyle = {
    marginLeft: 100,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React -- ttt { props.mainLabel }
        </a>
        <p>{ tt }</p>
        <Button
          buttonStyle={ buttonStyle }
          label="button test"
        />
      </header>
    </div>
  );
}

export default App;
