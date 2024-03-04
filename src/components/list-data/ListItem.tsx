import axios from "axios";
import "./ListItem.css";
interface IListItemProps {
  item: any;
  setReload: (item: boolean) => void;
}
const ListItem = (props: IListItemProps) => {
  const { item, setReload } = props;

  const handleDelete = async (id: number) => {
    try {
      const confirm = window.confirm("are you sure?");
      if (!confirm) return;
      await axios.delete(`http://localhost:8080/api/v1/todo/delete/${id}`);
      setReload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="root-list">
      <div className="list-header">
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => handleDelete(item._id)}
      >
        {" "}
        X{" "}
      </span>
    </div>
  );
};

export default ListItem;
