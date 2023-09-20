import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navBar';
import Searcher from './components/searcher';
import Todos from './components/todos';
let todo = [

]




function App() {
   const [todos, setTodos] = useState(todo);

   const addTodoHandler = (val) => {
    setTodos([...todos, {id: todos.length + 1, title: val}]);
  }

  const deleteHandler = (id) => {
    const updateTodo = todos.filter(item => item.id  !== id);
    setTodos(updateTodo);
  }

  return (
    <div className="App">
      <Navbar  />
      <Searcher todoFunc = {addTodoHandler} />
      <br></br>
      
       <Todos todo = {todos} todoFunc = {deleteHandler} />
   
    </div>
  );
}

export default App;
