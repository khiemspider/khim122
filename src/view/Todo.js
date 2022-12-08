import React,{useState} from "react";

const Todo=(props)=>{
    const todos = props.mydata
    return( <>
    
     <div className='todo-container'>
       {todos.map(todo =>{
        return <li> {todo.tiltle}</li>
       })}
       
        <p style={{ color: 'green' , fontSize: '30px'}}>         
          Hello Spider Man !
        </p>
        </div>
    </>
        


    )
}
export default Todo;