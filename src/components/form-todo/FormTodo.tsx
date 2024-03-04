import { useState } from "react";
import "./FormTodo.css";
import axios from "axios";

interface IFormDataProps {
  setReload: (value: boolean) => void;
}
const FormTodo = (props: IFormDataProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/todo/create", {
        title: inputValue,
        content: inputValue,
      });
      setInputValue("");
      props.setReload(true);
    } catch (error) {}
  };

  return (
    <form action="" className="form-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        value={inputValue}
        onChange={handleOnChange}
      />

      <button type="submit">ADD</button>
    </form>
  );
};

export default FormTodo;
