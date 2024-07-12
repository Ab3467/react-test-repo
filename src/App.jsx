import React from "react";
import "./index.css";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 font-serif">
          Todo List
        </h1>
        <AddTodoForm/>
      </div>
    </div>
  );
}

export default App;
