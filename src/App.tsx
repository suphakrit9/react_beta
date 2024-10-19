import React from 'react';
import './App.css';
import { Todo } from './type'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([{
    id: 1,
    text:"Buy something",
    completed: false
  },{
    id: 2,
    text:"Do homework",
    completed: true
  }])

  return (
    <div className="App">
      <header className="App-header">
       <h1>yoyoyo</h1>
       <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
