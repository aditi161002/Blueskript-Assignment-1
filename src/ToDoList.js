import React,{ useState } from 'react'
import './App.css'

const TodoList = () => {
    const [todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState("");

const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
        setTodos([...todos, {text: newTodo.trim(),checked: false}]);
        setNewTodo("");
    }
}

const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}

const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
}  

    return (
    <div className='overall'>
      <h1>TODO</h1>
      <input 
      className='input'
      type="text" 
      value={newTodo} 
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder='Enter New Task'
      >
      </input>

      <button className='add' onClick={handleAddTodo}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
            <li className='list' key={index}>
                <input
                type="checkbox" 
                checked={todo.checked} 
                onChange={() => handleToggleTodo(index)}
                />
                <span>
                    {todo.text}
                </span>
                <button className='del' onClick={() => handleDeleteTodo(index)}>
                Delete
                </button>
            </li>
        ))}
      </ul>
    </div>
  )
}


export default TodoList;
