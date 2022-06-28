import React from "react";
import Grid from "../common/Grid";
import styles from "../css/DetailsInfo.module.css";

function DetailsInfo({ info }) {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <Grid
          grid={false}
          textFirstColumn={"Bio:"}
          textSecondColumn={info.bio}
        />
      </div>
      <div className={styles.info__item}>
        <Grid
          grid={true}
          textFirstColumn={"Phone:"}
          textSecondColumn={info.phone}
        />
      </div>
      <div className={styles.info__item}>
        {Object.keys(info)
          .slice(5, 9)
          .map((key, index) => (
            <div key={index} className={styles["info__item--sm"]}>
              <Grid
                key={key}
                grid={true}
                textFirstColumn={`${
                  key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/[^a-zA-Z]+/g, "")
                }:`}
                textSecondColumn={info[key]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default DetailsInfo;
