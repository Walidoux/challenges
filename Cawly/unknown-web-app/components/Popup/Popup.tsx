import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "../../styles/components/popup.module.scss";
import { useTodos } from "../../contexts/Todos";

export interface PopupProps {
  visibility: boolean;
  handleClosePopup: React.MouseEventHandler<HTMLButtonElement>;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { visibility, handleClosePopup } = props;

  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const handleTodoValidation = (event: any): void => {
    event.preventDefault();
    handleClosePopup(event);
    addTodo({ title: newTodo, id: uuidv4(), checked: false });
    setNewTodo("");
  };

  return (
    <div className={`${styles.popup} ${visibility && styles.visible}`}>
      <button className={styles.close_button} onClick={handleClosePopup}>
        {""}
      </button>
      <form className={styles.container} onSubmit={handleTodoValidation}>
        <input
          type="text"
          name="textinput"
          autoComplete="off"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          className={styles.text_input}
          placeholder="Votre to-do ici..."
          required
        />
        <input type="submit" className={styles.submit_button} value="Confirm" />
      </form>
    </div>
  );
};

export default Popup;
