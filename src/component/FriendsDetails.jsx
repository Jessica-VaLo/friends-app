import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import styles from "../css/FriendsDetails.module.css";
import Tabs from "../common/Tabs";

function FriendsDetails({ friend, onGoBack }) {
  const [itemSelected, setItemSelected] = useState("info");

  const handleSelect = (id) => {
    console.log(id);
    setItemSelected(id);
  };

  return (
    <div className={styles.details}>
      <button className={styles["details__button--back"]} onClick={onGoBack}>
        <i className="fa fa-regular fa-arrow-left"></i>
      </button>
      <FriendProfile sizeSm={false} friend={friend} />
      <Tabs itemSelected={itemSelected} onSelect={handleSelect} />
    </div>
  );
}

export default FriendsDetails;
