import Image from "next/image";
import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu2";

import MoonIcon from "./utils/MoonIcon";
import SunIcon from "./utils/SunIcon";
import { activeMenuBarStyles } from "./utils/constants";
import styles from "../../styles/components/navbar.module.scss";

interface NavigationBarProps {
  title: string;
  handleThemeToggler: () => void;
  navLinks: string[];
  isDarkMode: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  const { title, isDarkMode, handleThemeToggler, navLinks } = props;

  const [activeMenuBar, setActiveMenuBar] = useState<boolean>(false);
  const iconComponent = !isDarkMode ? <MoonIcon /> : <SunIcon />;

  return (
    <nav className={styles.navigationbar}>
      <div className={styles.container}>
        <div className={styles.tab_nav}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              height={40}
              width={40}
              draggable="false"
              alt="Logo"
            />
            <h1 className={styles.logo_text}>{title}</h1>
          </div>
          <UseAnimations
            animation={menu}
            size={45}
            speed={2.5}
            strokeColor={isDarkMode ? "white" : "black"}
            onClick={() => setActiveMenuBar((active) => !active)}
            className={styles.button}
          />
        </div>
        <ul
          className={styles.nav_links}
          style={activeMenuBar ? activeMenuBarStyles : null}
        >
          {navLinks.map((link, id) => {
            return (
              <li className={`${styles.nav_item} ${styles.directory}`} key={id}>
                <a href={`#${link}`} className={styles.nav_link}>
                  {link}
                </a>
              </li>
            );
          })}
          <li className={styles.nav_item}>
            <button
              className={styles.nav_button}
              onClick={() => handleThemeToggler()}
            >
              {iconComponent}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
