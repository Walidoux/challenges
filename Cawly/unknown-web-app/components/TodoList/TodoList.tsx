import { useTodos } from "../../contexts/Todos";
import Todo from "./Todo/Todo";

import styles from "../../styles/components/todolist.module.scss";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul className={styles.todolist}>
      <div className={styles.container}>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </div>
    </ul>
  );
};

export default TodoList;
