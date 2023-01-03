import "./App.css";

//components
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";
function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <TodosList />
    </div>
  );
}

export default App;
