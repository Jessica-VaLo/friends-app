import React from "react";
import friends from "../friendsData.json";
import styles from "../css/FriendsAppContainer.module.css";
import FriendsListContainer from "./FriendsListContainer";

function FriendsAppContainer() {
  const handleShowDetails = () => {
    console.log("Show details");
  };
  return (
    <div className={styles.container}>
      <FriendsListContainer
        friends={friends}
        onShowDetails={handleShowDetails}
      />
    </div>
  );
}

export default FriendsAppContainer;
