import React, { useState } from "react";
import photos from "../photosFriends.json";
import FriendProfile from "./FriendProfile";
import styles from "../css/FriendsDetails.module.css";
import Tabs from "../common/Tabs";
import DetailsInfo from "./DetailsInfo";
import DetailsPhotos from "./DetailsPhotos";

function FriendsDetails({ friend, onGoBack }) {
  const [itemSelected, setItemSelected] = useState("info");

  const handleSelect = (id) => {
    setItemSelected(id);
  };

  let selected = itemSelected === "info" ? true : false;

  return (
    <div className={styles.details}>
      <button className={styles["details__button--back"]} onClick={onGoBack}>
        <i className="fa fa-regular fa-arrow-left"></i>
      </button>
      <FriendProfile sizeSm={false} friend={friend} />
      <Tabs itemSelected={itemSelected} onSelect={handleSelect} />
      <div className={styles.details__tab}>
        {selected && <DetailsInfo info={friend} />}
        {!selected && <DetailsPhotos photos={photos.photos} />}
      </div>
    </div>
  );
}

export default FriendsDetails;
