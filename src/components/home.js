function Home() {
  return (
    <div className="display-todo-container card">
      <div className="display-todo-input">
        <input type="text" placeholder="Enter a new todo" /> 
        
        <button>Add Todo</button>
      </div>
      <ul>
        <li >Coding </li>
      </ul>
    </div>
  );
}

export default Home
