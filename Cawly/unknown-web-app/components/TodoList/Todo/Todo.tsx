import React, { useRef } from "react";
import UseAnimations from "react-useanimations";
import TrashIcon from "react-useanimations/lib/trash";
import { useStateIfMounted } from "use-state-if-mounted";

import { useTodos, Todo as TodoType } from "../../../contexts/Todos";

import styles from "../../../styles/components/todo.module.scss";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = (props) => {
  const { setTodo, removeTodo } = useTodos();
  const { todo } = props;

  const audioRef = useRef<HTMLAudioElement>(null);
  const todoRef = useRef<HTMLLIElement>(null);

  const [clickAction, setClickAction] = useStateIfMounted(false);

  const handleCheckTodo = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) audioRef.current?.play();
    setTodo({
      ...todo,
      checked: event.target.checked,
    });
  };

  return (
    <li
      ref={todoRef}
      className={`${styles.todo} ${todo.checked && styles.checked} ${
        clickAction && styles.removed
      }`}
    >
      <input
        checked={todo.checked}
        type="checkbox"
        name="checktodo"
        className={styles.checkbox}
        onChange={handleCheckTodo}
      />
      <audio ref={audioRef}>
        <source src="./musics/check_sound.ogg" type="audio/ogg" />
        <source src="./musics/check_sound.mp3" type="audio/mpeg" />
      </audio>
      <div className={styles.container}>
        <p className={styles.title}>{todo.title}</p>
        <p className={styles.description}>
          Priorité:{" "}
          <span className={`${styles.value} ${styles.mediumPriority}`}>
            Moyenne
          </span>
        </p>
      </div>
      <button
        className={styles.button}
        onClick={(event) => {
          setClickAction(true);
          setTimeout(() => {
            removeTodo(todo);
          }, 1000);
        }}
      >
        <UseAnimations
          animation={TrashIcon}
          className={styles.icon_button}
          strokeColor="red"
        />
      </button>
    </li>
  );
};

export default Todo;
