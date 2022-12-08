import logo from './logo.svg';
import './App.css';
import MyComponent from './view/MyComponent.js';
import Nav from './view/Nav.js';


// 2 : class component & function component

function  App() {
  const  handleEventClick =( )=>{
    console.log('>>>>Click me')
  }
  return (
    <>
    
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'green' , fontSize: '30px'}}>
      
          Hello Spider Man
        </p>
        <button type='button' onClick={()=> handleEventClick()}> LOGIN</button>
        
         
         
      </header>
      
    </div>
    </>
  );
}

export default App;
