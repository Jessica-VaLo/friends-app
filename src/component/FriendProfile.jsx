import React from "react";
import photos from "../photosFriends.json";
import styles from "../css/FriendProfile.module.css";
import sm from "../css/FriendProfileSm.module.css";
import bg from "../css/FriendProfileBg.module.css";

//This component will be used with two different styles layout
//for that reason need to choose wich size needs to be displayed
//choose sizeSm : true for small version (default behavior)
//or sizeSm : false for bigger version

function FriendProfile({ friend, sizeSm = true }) {
  const propStyles = sizeSm ? sm : bg;

  const available = friend.available
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
        <span role={"status"} className={available}></span>
      </div>
      <div className={propStyles.profile__text}>
        <h2 className={propStyles.profile__name}>
          {friend.first_name} {friend.last_name}
        </h2>
        <span className={styles.profile__badge}>{friend.status}</span>
      </div>
    </div>
  );
}

export default FriendProfile;
