import { useEffect, useState } from "react"
import List from "./componets/List";
import axios from "axios";
import { baseUrl } from "./utils/constant";
import "./App.css";

function App() {
  const [Input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateID, setUpdateID] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseUrl}/save`, { task: Input }).then((res) => {
      console.log(res.data); setInput("");
      setUpdateUI(!updateUI); // Toggle the state to trigger the useEffect  //or setUpdateUI((prevState) => !prevState)

    });
  }


  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateID(id);
  }

  const updateTask = () => {
    axios.put(`${baseUrl}/update/${updateID}`, { task: Input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateID(null);
      setInput("");
    })
  }

  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Simple MERN CRUD App</h1>
          <h2>To_do Application</h2>
        </div>
        <div >
          <div className="input_holder">
            <input type="text" value={Input} onChange={(e) => setInput(e.target.value)} />
            {/* <button type="submit" onClick={updateID ? updateTask : addTask}>{updateID ? "Upadate Task" : "Add task"}</button> */}
            <button type="submit" onClick={updateID ? updateTask : addTask} className={updateID ? "update-mode" : ""}>
              {updateID ? "Update Task" : "Add Task"}
            </button>

          </div>
          <ul>
            {tasks.map((task) => (
              // console.log(task._id);/
              <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App


