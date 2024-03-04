import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoPage from "./pages/todo/TodoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
