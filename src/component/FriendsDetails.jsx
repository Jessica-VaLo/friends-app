import React from "react";
import FriendProfile from "./FriendProfile";
import styles from "../css/FriendsDetails.module.css";

function FriendsDetails({ friend, onGoBack }) {
  return (
    <div className={styles.details}>
      <button className={styles["details__button--back"]} onClick={onGoBack}>
        <i className="fa fa-regular fa-arrow-left"></i>
      </button>
      <FriendProfile sizeSm={false} friend={friend} />
    </div>
  );
}

export default FriendsDetails;
