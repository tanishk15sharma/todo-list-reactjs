import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addItems = () => {
    todolist.push({ description: item });
    setTodolist(todolist);
    setItem("");
  };

  const deleteTask = (index) => {
    const newList = todolist.filter((item, i) => i !== index);
    setTodolist(newList);
  };

  return (
    <div className="App-container">
      <h1 className="heading">TODO List</h1>
      <div className="task-container">
        <div>
          <input
            type="text"
            className="inputfield"
            autoFocus
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="add-btn" onClick={addItems}>
            ADD
          </button>
        </div>
        {todolist?.length ? (
          todolist.map((toDoObject, index) => (
            <ListItem
              index={index}
              itemData={toDoObject}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p>
            ❝ When you're curious, you find lots of interesting things to do ❞{" "}
          </p>
        )}
      </div>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-container">
      <span> {props.itemData.description} </span>
      <button onClick={() => props.deleteTask(props.index)} className="del-btn">
        del
      </button>
    </div>
  );
}

export default App;
