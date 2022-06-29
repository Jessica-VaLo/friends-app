import React from "react";
import FriendCard from "./FriendCard";
import styles from "../css/FriendsList.module.css";

function FriendsList({ friends, onShowDetails }) {
  return (
    <div className={styles.list}>
      <div className={styles.list__title}>
        <h1 className={styles.list__title__heading}>Friends</h1>
      </div>
      <div className={styles.list__container}>
        {friends.map((friend) => (
          <FriendCard
            key={`FriendCard+${friend.id}`}
            friend={friend}
            onShowDetails={onShowDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
