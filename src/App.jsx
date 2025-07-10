import { useState } from "react";
import ToDoList from "./Components/ToDoList";

import "./App.css";
import Header from "./Components/Header";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  //Add Function
  const handleAdd = () => {
    if (input.trim() === "") {
      alert("Please Enter something");
      return;
    }
    if (editIndex !== null) {
      // Update existing item
      const updatedList = [...list];
      updatedList[editIndex] = input;
      setList(updatedList);
      setEditIndex(null);
    } else {
      // Add new item
      setList([...list, { text: input, completed: false }]);
    }
    setInput("");
  };

  const toggleComplete = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  const handleDelete = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
    alert(setList(updated));
  };

  const handleEdit = (index) => {
    setInput(list[index].text); // Only set the text for editing
    setEditIndex(index);
  };

  const handleUpdate = () => {
    const updatedList = list.map((item, index) =>
      index === editIndex
        ? { ...item, text: input } // Update only the text, keep completed
        : item
    );
    setList(updatedList);
    setInput("");
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center bg-transparent mt-12">
        <div className="w-[70%] flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3 mb-2 shadow-md">
          <textarea
            value={input}
            autoFocus
            onChange={(e) => setInput(e.target.value)}
            className=" w-full text-center max-h-32 resize-y rounded-md bg-gray-900 text-amber-200 font-mono px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 shadow-inner placeholder:text-gray-500"
            placeholder="Write your task here..."
          ></textarea>
          <button
            type="button"
            onClick={editIndex !== null ? handleUpdate : handleAdd}
            className="ml-4 px-5 py-2 rounded-lg bg-amber-400 text-gray-900 font-bold shadow hover:bg-amber-300 transition-colors duration-200 focus:outline-none focus:ring-2 hover:cursor-pointer focus:ring-amber-500"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <ToDoList
        list={list}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
