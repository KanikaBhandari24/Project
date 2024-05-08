import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  //stores input text
  const [todo, setTodo] = useState("");
  //holds all todos
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todo);
    }
  }, []);

  const savetols = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetols();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetols();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    savetols();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetols();
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-6 bg-blue-200 min-h-[85vh] w-1/2">
        <div className="addTodo my-5 flex">
          <h2 className="text-lg font-bold">Add a task</h2>
          <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2 rounded"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-blue-700 hover:bg-blue-600 disabled:bg-blue-500 py-1 p-4 text-white rounded-lg mx-5 text-l font-bold"
          >
            Add
          </button>
          </div>
        </div>
        <input
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />{" "}
        Show Finished
        <h2 className="font-bold text-lg">ToDo's</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-s m-5 font-bold">Oops! No ToDo to display</div>
          )}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-1/2 my-3 justify-between"
                >
                  <div className="flex gap-6">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      id=""
                    />
                  </div>
                  <div className={item.isCompleted ? "blur" : ""}>
                    {item.todo}
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-blue-700 hover:bg-blue-600 py-1 p-4 text-white rounded-lg mx-1 text-l font-bold"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-blue-700 hover:bg-blue-600 py-1 p-4 text-white rounded-lg mx-2 text-l font-bold"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
