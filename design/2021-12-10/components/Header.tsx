import Image from "next/image";

import styles from "../styles/components/header.module.scss";

type HeaderProps = {
  title;
  button;
  description: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { title, description, button } = props;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.illustration}>
          <Image
            src="/images/home.png"
            height={385}
            width={450}
            draggable={false}
            alt="Christmas Illustration"
          />
        </div>
        <div className={styles.right_content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <button className={styles.link}>{button}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
