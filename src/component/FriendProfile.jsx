import React from "react";
import photos from "../photosFriends.json";
import styles from "../css/FriendProfile.module.css";

//This component will be used with two different styles layout
//for that reason some of the styles are passed while off props

function FriendProfile({ friend, propStyles }) {
  const available = friend.profile__available
    ? `${styles.profile__available} ${propStyles.profile__available} ${styles["profile__available--true"]}`
    : `${styles.profile__available} ${propStyles.profile__available} ${styles["profile__available--false"]}`;

  return (
    <div className={propStyles.profile__layout}>
      <div className={styles.profile__image}>
        <img
          className={propStyles.profile__photo}
          // Should render friend.img but currently the api is not working
          src={photos.photos[friend.id - 1]}
          alt="A friend"
        />
        <span className={available}></span>
      </div>
      <div className={propStyles.profile__text}>
        <h2 className={propStyles.profile__name}>
          {friend.first_name} {friend.last_name}
        </h2>
        <span className={styles.profile__badge}>
          {friend.status || friend.statuses[0]}
        </span>
      </div>
    </div>
  );
}

export default FriendProfile;
