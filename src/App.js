import React,{useState,useEffect} from "react";
import 'react-bootstrap'
import './App.css';

import Form from './component/form.js'
import TodoList from './component/todoList'
function App() {
 useEffect(()=>{getLocalTodos();},[]);
 const [filter, setFilter] = useState("All")
 const [inputText,setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [filteredTodos, setFilteredTodos] = useState([])
 const filterHandler = () => {
  switch (filter){
    case "completed":
      setFilteredTodos(todos.filter((todo)=>todo.completed===true));
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter((todo)=>todo.completed===false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
  
};
const saveLocalTodos =()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
};
const getLocalTodos=()=>{
  if(localStorage.getItem('todos') == null){
    localStorage.setItem('todos',JSON.stringify([]));
  }
  else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
}
useEffect(()=>{
  filterHandler();
  saveLocalTodos();},[todos,filter]);
 return (
    <div className="App">
      <header >
        <h1>Juan's Todo List</h1>
      </header>
      <Form         
        setFilter={setFilter} 
        todos ={todos} 
        setTodos = {setTodos} 
        inputText = {inputText} 
        setInputText = {setInputText}
      />
      
      <TodoList 
        setTodos={setTodos} 
        todos = {todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
