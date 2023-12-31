import Image from "next/image";

import styles from "../styles/components/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container_boxes}>
          <div className={styles.box}>
            <div className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Christmas Logo"
                height={32}
                width={32}
                draggable="false"
              />
              <h3 className={styles.text_logo}>Christmas</h3>
            </div>
            <p className={styles.description}>
              This Christmas give a lot of love.
            </p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Our services</h2>
            <ul className={styles.list_items}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Pricing
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Discounts
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Shipping mode
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Support</h2>
            <ul className={styles.list_items}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  FAQs
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Support center
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>Available on</h2>
            <ul className={styles.list_items}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <Image
                    src="/images/aviable1.png"
                    alt="Google Play Image Avaibility"
                    height={40}
                    width={135}
                    draggable="false"
                  />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <Image
                    src="/images/aviable2.png"
                    alt="App Store Image Avaibility"
                    height={40}
                    width={135}
                    draggable="false"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          &copy; Bemicode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
