import logo from './logo.svg';
import Covid from './covid/Covid';
import './App.css';
import MyComponent from './view/MyComponent.js';
import Nav from './view/Nav.js';
import { useState , useEffect} from 'react';
import ChildComponent from './view/ChildComponent';
import Todo from './view/Todo';


// 2 : class component & function component



  //const [name , setName] = useState('')
  const TODO_INITIAL_STATE = [
    { id: 'Có lẽ ', title: 'maybe ', type: '123' },
    { id: 'cuộc đời ', title: 'sóng gió ', type: 'NDK' },
    { id: 'da dẻ ', title: 'homeming ', type: '345' },
    { id: 'cuộc đời cát bụi ', title: 'sóng gió thương trường ', type: 'abc' }
  ]
  
  function App() {
  
    useEffect(()=>{
      console.log('run UseEffect')
    },[TODO_INITIAL_STATE.title])
  
    //const [name , setName] = useState('')
    const [address, setAddress] = useState('')
    const [todos, setTodos] = useState(TODO_INITIAL_STATE)
  
    const handleEventInput = (e) => {
      setAddress(e.target.value)
    }
    const handleDeleteTodo = (id) => {
      setTodos((prevState) => (prevState.filter(item => item.id !== id)))
    }
    const gerateTodoId = () => Math.floor(Math.random() * 10000) + 1
    const handleEventClick = () => {
      if (!address) {
        alert('Bạn cần nhập dữ liệu ')
        return
      }
      // setName(even.target.value)
      const newtodos = {
        id: gerateTodoId(),
        title: address,
        type: "NDK"
      }
      setTodos((prevState) => ([...prevState, newtodos]))
      setAddress('')
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
       {/* <Todo
            myData={todos}
            title="All todo"
            onDeleteTodo={handleDeleteTodo}
          />
          <Todo
            myData={todos?.filter(item => item.type === "NDK")}
            title="NDK"
            onDeleteTodo={handleDeleteTodo}
          />
          <input
            value={address}
            type='text'
            onChange={handleEventInput}
          />
          <button type='button' onClick={handleEventClick}>
            LOGIN
         </button> */}
       <Covid/>
       
         
      </header>
      
    </div>
    
    </>
  
  );
      }


export default App;
