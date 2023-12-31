import type { NextPage } from "next";

import Head from "../components/Head";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <NavigationBar />
    </>
  );
};

export default Home;
