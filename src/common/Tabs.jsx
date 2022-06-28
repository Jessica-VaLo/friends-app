import React from "react";
import styles from "../css/Tabs.module.css";

const Tabs = ({ itemSelected, onSelect }) => {
  return (
    <ul className={styles.tabs}>
      <li className={styles.tabs__item}>
        <button
          id="info"
          className={
            itemSelected === "info"
              ? `${styles.tabs__link} ${styles["tabs__link--active"]}`
              : `${styles.tabs__link}`
          }
          onClick={(e) => onSelect(e.currentTarget.id)}
        >
          Info
        </button>
      </li>
      <li className={styles.tabs__item}>
        <button
          id="photo"
          className={
            itemSelected === "photo"
              ? `${styles.tabs__link} ${styles["tabs__link--active"]}`
              : `${styles.tabs__link}`
          }
          onClick={(e) => onSelect(e.currentTarget.id)}
        >
          Photo
        </button>
      </li>
    </ul>
  );
};

export default Tabs;
