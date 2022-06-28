import React from "react";
import FriendProfile from "./FriendProfile";
import friend from "../friendDetails.json";
import profileStyles from "../css/FriendProfileBg.module.css";
import styles from "../css/FriendsAppContainer.module.css";

function FriendsAppContainer() {
  return (
    <div className={styles.container}>
      <FriendProfile friend={friend} propStyles={profileStyles} />
    </div>
  );
}

export default FriendsAppContainer;
