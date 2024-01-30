import type { NextPage } from "next";
import { useCallback, useState } from "react";

import Head from "../components/Head";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";
import { TodosProvider, useTodos } from "../contexts/Todos";
import Popup from "../components/Popup/Popup";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  const { addTodo } = useTodos();
  const [popupState, setPopupState] = useState(false);

  console.log(addTodo);

  const handleCreateTodo = useCallback(() => {
    setPopupState((visibility) => !visibility);
  }, []);

  return (
    <TodosProvider>
      <Head />

      <main>
        <Header />
        <TodoList />
        <Footer handler={handleCreateTodo} />

        <Popup visibility={popupState} handleClosePopup={handleCreateTodo} />
      </main>
    </TodosProvider>
  );
};

export default Home;
