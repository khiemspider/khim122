import logo from './logo.svg';
import './App.css';
import MyComponent from './view/MyComponent.js';


// 2 : class component & function component

function  App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='mau'>
      
          Hello Spider Man
        </p>
        
         <MyComponent/>
      </header>
      
    </div>
  );
}

export default App;
