import React from "react";
import styles from "../css/Popup.module.css";

function Popup({ source, onClose }) {
  return (
    <div className={styles.popup}>
      <img src={source} alt="zoom in" className={styles.popup__item} />
      <button className={styles["popup__button--close"]} onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default Popup;
