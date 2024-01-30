import { createContext, useContext, useState, useEffect } from "react";

export interface Todo {
  title: string;
  id: string;
  checked: boolean;
}

export interface TodosValue {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

const TodosContext = createContext<TodosValue>({} as TodosValue);

export const TodosProvider: React.FC = (props) => {
  const { children } = props;

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };

  const setTodo = (todo: Todo): void => {
    const todosArray = [...todos];
    const todoIndex = todosArray.findIndex(
      (todoObject) => todoObject.id === todo.id
    );
    if (todoIndex !== -1) {
      todosArray[todoIndex] = todo;
      setTodos(todosArray);
    }
  };

  const removeTodo = (todo: Todo): void => {
    const todosArray = [...todos];
    const desiredTodo = todosArray.indexOf(todo);
    todosArray.splice(desiredTodo, 1);
    setTodos(todosArray);
  };

  useEffect(() => {
    const storage = localStorage.getItem("todos");
    if (storage != null) {
      setTodos(JSON.parse(storage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, addTodo, setTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = (): TodosValue => {
  return useContext(TodosContext);
};
