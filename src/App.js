import Todo from "./components/Todo";

function App() {
  return(
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Read your book' />
      <Todo text='Start writing your first book' />
    </div>
  )
}

export default App;
