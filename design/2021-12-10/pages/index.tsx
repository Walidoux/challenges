import { useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import Head from "../components/Head";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import ItemsBox from "../components/ItemBox/ItemsBox";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const darkTheme = useRef<HTMLElement>();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleThemeToggler = (): void => {
    setDarkMode((theme) => !theme);
    darkTheme.current.setAttribute("data-theme", darkMode ? "light" : "dark");
  };

  return (
    <main data-theme="light" ref={darkTheme}>
      <Head />

      <NavigationBar
        title="Christmas"
        handleThemeToggler={handleThemeToggler}
        navLinks={["Home", "Celebrate", "Gifts", "New"]}
        isDarkMode={darkMode}
      />

      <div id="Home">
        <Header
          title="Merry Chritmas and Happy New Year!"
          description="Christmas and happy new year is about to begin, all good wishes and
            successes."
          button="Get Started"
        />

        <section>
          <h1 className="title">Start Giving Christmas</h1>
          <div className="container">
            <ItemsBox items="itemsBox" withBackground={false} />
          </div>
        </section>
      </div>

      <section className="secondary" id="Celebrate">
        <div className="container">
          <div className="left_part">
            <h1 className="title">Celebrate With A Lot Of Love</h1>
            <p className="description">
              In this holidays, celebrate with much love and peace, offering
              many blessings to our loved ones, friends and neighbors, whising
              them a good Christmas message.
            </p>
            <button className="link">Send Good Wishes</button>
          </div>
          <div className="illustration">
            <Image
              src="/images/celebrate.png"
              alt="Celebrating Image"
              height={400}
              width={400}
              draggable={false}
            />
          </div>
        </div>
      </section>

      <section className="tertiary">
        <h1 className="title">Share a gift</h1>
        <div className="container">
          <ItemsBox items="shopItems" withBackground={false} />
        </div>
      </section>

      <section className="quaternary">
        <h1 className="title">New gifts</h1>
        <div className="container">
          <ItemsBox items="giftItems" withBackground={true} />
        </div>
      </section>

      <section className="quinary">
        <div className="container">
          <form method="GET" className="left_part">
            <h1 className="title">Send Good Wishes!</h1>
            <input
              type="text"
              name="text_input"
              placeholder="Your message here..."
              autoComplete="off"
              required
            />
            <input type="submit" name="submit_message" value="Send Message" />
          </form>
          <Image
            src="/images/message.png"
            alt="Message Image Illustration for Christmas"
            height={300}
            width={500}
            draggable={false}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
