import { useEffect, useState } from "react";
import FormTodo from "../../components/form-todo/FormTodo";
import ListItem from "../../components/list-data/ListItem";

import "./Todo.css";
import axios from "axios";
const TodoPage = () => {
  const [todo, setTodo] = useState<any[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  //call api
  const handleCallAPI = async () => {
    const res = await axios.get("http://localhost:8080/api/v1/todo/list");
    const data = res.data;

    setTodo(data.data);
  };

  useEffect(() => {
    handleCallAPI();

    () => {
      setReload(false);
    };
  }, [reload]);

  return (
    <div className="root-container">
      <h2>Todo List</h2>
      <FormTodo setReload={setReload} />
      {todo?.map((item, index) => {
        return <ListItem item={item} key={index} setReload={setReload} />;
      })}
    </div>
  );
};

export default TodoPage;
