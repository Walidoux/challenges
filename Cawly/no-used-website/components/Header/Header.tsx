import Image from "next/image";

import styles from "../../styles/layouts/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header_app}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/Logo.svg"
            height={60}
            width={60}
            draggable="false"
            alt="Cawly's Logo"
          />
        </div>
        <div className={styles.info_field}>
          <p className={styles.title}>I fully believe in you !</p>
          <span className={styles.description}>You can do it. 💪</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
