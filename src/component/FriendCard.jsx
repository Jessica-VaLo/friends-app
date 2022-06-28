import React from "react";
import FriendProfile from "./FriendProfile";
import profileStyles from "../css/FriendProfileSm.module.css";
import styles from "../css/FriendCard.module.css";

function FriendCard({ friend, onShowDetails }) {
  return (
    <div className={styles.list__card}>
      <FriendProfile propStyles={profileStyles} friend={friend} />
      <button
        className={styles.list__card__button}
        onClick={() => onShowDetails(friend.id)}
      >
        Details
      </button>
    </div>
  );
}

export default FriendCard;
