import styles from "../../styles/layouts/footer.module.scss";

export interface FooterProps {
  handler: React.MouseEventHandler<HTMLButtonElement>;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { handler } = props;

  return (
    <footer className={styles.footer}>
      <button className={styles.button} onClick={handler}>
        {""}
      </button>
    </footer>
  );
};

export default Footer;
