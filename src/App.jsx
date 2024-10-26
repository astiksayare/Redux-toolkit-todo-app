import TodoForm from "./components/Todo/todo-form";
import TodoList from "./components/Todo/todo-list";


const App = () => {
  return (
     <>
      <h1 className="text-center text-white mt-5 font-bold text-2xl my-5"> Todo App</h1>
      <TodoForm />
      <TodoList/>
     </>
  )
}

export default App;