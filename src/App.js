import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todolist, setTodolist] = useState([]);

  const inputKey = (e) => {
    if (e.keyCode === 13) {
      addItems();
    }
  };

  const addItems = () => {
    todolist.push({ description: item, isCompleted: false });
    setTodolist(todolist);
    setItem("");
  };

  const deleteTask = (index) => {
    const newList = todolist.filter((item, i) => i !== index);
    setTodolist(newList);
  };

  const completedTask = (index) => {
    const completeList = [...todolist];
    completeList[index].isCompleted = !completeList[index].isCompleted;
    setTodolist(completeList);
  };

  return (
    <div className="App-container">
      <h1 className="heading">TODO List</h1>
      <div className="task-container">
        <div>
          <input
            type="text"
            className="inputfield"
            value={item}
            onKeyDown={inputKey}
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
              completeTask={completedTask}
            />
          ))
        ) : (
          <p>
            ❝ When you're curious, you find lots of interesting things to do ❞{" "}
          </p>
        )}
      </div>
      <p className="footer">Tanishk Sharma © reactJS</p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-container">
      <span
        className={props.itemData.isCompleted ? "task-complete" : ""}
        onClick={() => props.completeTask(props.index)}
      >
        {props.itemData.description}
      </span>
      <button onClick={() => props.deleteTask(props.index)} className="del-btn">
        del
      </button>
    </div>
  );
}

export default App;
