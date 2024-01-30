import type { NextPage } from "next";
import { useState } from "react";

import Head from "../components/Head";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";
import { TodosProvider } from "../contexts/Todos";
import Popup from "../components/Popup/Popup";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  const [popupState, setPopupState] = useState(false);

  const handleCreateTodo = (): void => {
    setPopupState((visibility) => !visibility);
  };

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
