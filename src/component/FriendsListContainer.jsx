import React from "react";
import FriendProfile from "./FriendProfile";
import profileStyles from "../css/FriendProfileSm.module.css";
import styles from "../css/FriendsListContainer.module.css";

function FriendsListContainer({ friends, onShowDetails }) {
  return (
    <div className={styles.list}>
      <div className={styles.list__title}>
        <h1 className={styles.list__title__heading}>Friends</h1>
      </div>
      <div className={styles.list__container}>
        {friends.map((friend) => (
          <div className={styles.list__card}>
            <FriendProfile
              key={`${friend.id}+${friend.first_name}`}
              propStyles={profileStyles}
              friend={friend}
            />
            <button
              className={styles.list__card__button}
              onClick={() => onShowDetails(friend.id)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsListContainer;
