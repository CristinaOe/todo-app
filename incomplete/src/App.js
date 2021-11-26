import "./App.css";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <TodoList />
    </div>
  );
}

export default App;
