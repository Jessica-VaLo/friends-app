import React from "react";
import styles from "../css/Grid.module.css";
import column from "../css/GridTwoColumn.module.css";
import row from "../css/GridTwoRow.module.css";

//This grid will be used with different styles layout
//for that reason need to choose wich layout needs to be displayed
//choose grid : true for a 2 column grid (default behavior)
//or grid : false for a 2 row grid

const Grid = ({ grid = true, textFirstColumn, textSecondColumn }) => {
  const propStyles = grid ? column : row;
  return (
    <div className={propStyles.info__grid}>
      <div className={propStyles.info__grid__item1}>
        <p
          className={`${styles.info__grid__text} ${styles["info__grid__text--gray"]}`}
        >
          {textFirstColumn}
        </p>
      </div>
      <div className={propStyles.info__grid__item2}>
        <p
          className={`${styles.info__grid__text} ${styles["info__grid__text--thiner"]}`}
        >
          {textSecondColumn}
        </p>
      </div>
    </div>
  );
};

export default Grid;
