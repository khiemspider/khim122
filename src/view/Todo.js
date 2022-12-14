import React from "react";


const Todo = ({ myData, title, onDeleteTodo }) => {

  const handleDelete = (id) => {
    onDeleteTodo(id)
  }

  return (<>
    
    <div className='todo-container'>
      
      <div className="tiltle">
        
        {title}
      </div>
      
      {myData?.map(item => {
        return <li
          key={item.title}
        >
          <span>{item.title}</span>
          <span onClick={() => handleDelete(item.id)}>
            x
          </span>
        </li>
      })}
      <hr />
    </div>
  </>



  )
}
export default Todo;