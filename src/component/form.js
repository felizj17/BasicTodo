import React from "react";

const Form =(props)=>{


  const inputTextHandler =(e) =>{
    props.setInputText(e.target.value)
  }
  const submitTodoHandler=(e)=>{
    e.preventDefault();
    props.setTodos([
      ...props.todos, {text: props.inputText, completed: false, id: Math.random()*1000}
    ])
    props.setInputText('');
  };
  const filterHandler=(e)=>{
    props.setFilter(e.target.value);
  }
 
  return(
    <form>
      <input value ={props.inputText} onChange ={inputTextHandler} type="text" className="w-50" />
      <button onClick= {submitTodoHandler} className=" todo-btn" type="submit">
      <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;