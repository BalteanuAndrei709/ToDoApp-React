import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <ToDoItem setTodos={setTodos} todos={todos} key={item.name} item={item} />
      ))}
    </div>
  );
}
