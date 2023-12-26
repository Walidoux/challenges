import Image from "next/image";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import { itemsBox } from "./utils/items";
import { shopItems } from "./utils/shopItems";
import { giftItems } from "./utils/giftItems";
import styles from "../../styles/components/itemsbox.module.scss";

type ItemsBoxProps = {
  items: string;
  withBackground: boolean;
};

const ItemsBox: React.FC<ItemsBoxProps> = (props) => {
  const { items, withBackground } = props;
  const currentItems =
    items === "itemsBox"
      ? itemsBox
      : items === "shopItems"
      ? shopItems
      : giftItems;

  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView="auto"
      pagination={{
        clickable: true,
      }}
      className={styles.itemsbox}
    >
      {currentItems.map((item, id) => {
        const isShopItems = item.title.toString().startsWith("$");
        return (
          <SwiperSlide
            key={id}
            className={`${styles.itembox} ${
              isShopItems ? styles.shopItem : null
            } ${withBackground ? styles.withBackground : null}`}
          >
            {isShopItems ? (
              <UseAnimations
                animation={heart}
                className={styles.favorite_button}
                reverse={item.favorite ? true : false}
                size={30}
                fillColor={!withBackground ? "#d33636" : "white"}
                strokeColor={!withBackground ? "#d33636" : "white"}
              />
            ) : null}
            <div className={styles.illustration}>
              <Image
                src={item.image}
                alt="Gift Image"
                height={125}
                width={125}
                draggable={false}
              />
            </div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ItemsBox;
