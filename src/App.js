import "./App.css";
import Post from "./components/posts/Post";
import Todos from "./components/toDos/Todos";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Post />
      <Users />
      <Todos />
    </div>
  );
}

export default App;
