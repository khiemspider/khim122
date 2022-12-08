import logo from './logo.svg';
import './App.css';
import MyComponent from './view/MyComponent.js';
import Nav from './view/Nav.js';
import { useState } from 'react';
import ChildComponent from './view/ChildComponent';
import Todo from './view/Todo';


// 2 : class component & function component

function  App() {

  //const [name , setName] = useState('')
  const [address, setAddress] =useState('')
const [todos ,setTodos] = useState([
  {todo: 'Có lẽ ' , tiltle:'maybe '},
{todo:'cuộc đời ', tiltle:'sóng gió '},
])
 

  const handleEventInput =(e)=>{
    setAddress(e.target.value)
  }

  const  handleEventClick =(e)=>{
    if( !address){
      alert('empty input' )
      return
    }
    // setName(even.target.value)
    let newtodos ={todo:'tiếp nè', tiltle: address}
    setTodos([...todos , newtodos])
    // console.log('>>>>Click me', address)
  }
  return (
    <>
     <Nav/>
    <div className="App">
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div className='todo-container'>
       {todos.map(todo =>{
        return <li> {todo.tiltle}</li>
       })}
       
        <p style={{ color: 'green' , fontSize: '30px'}}>         
          Hello Spider Man !
        </p>
        
        </div> */}
        <Todo
        mydata={todos}/>
        <input type={'text'}  onChange={(e)=> handleEventInput(e)}></input>
        <button type='button' value={address} onClick={(e)=> handleEventClick(e)}> LOGIN</button>
       
       
         
      </header>
      
    </div>
    
    </>
    
  );
}

export default App;
