import React from "react";
import styles from "../css/PhotoGallery.module.css";

function PhotoGallery({ photos, onZoom }) {
  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt="gallery"
          className={styles.gallery__item}
          onClick={() => onZoom(photo)}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
