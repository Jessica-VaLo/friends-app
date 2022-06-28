import React from "react";
import friends from "../friendsData.json";
import friend from "../friendDetails.json";
import styles from "../css/FriendsAppContainer.module.css";
import FriendsListContainer from "./FriendsListContainer";
import FriendsDetails from "./FriendsDetails";

function FriendsAppContainer() {
  const handleShowDetails = () => {
    console.log("Show details");
  };
  const handleGoBack = () => {
    console.log("Go back");
  };
  return (
    <div className={styles.container}>
      {/* <FriendsListContainer
        friends={friends}
        onShowDetails={handleShowDetails}
      /> */}
      <FriendsDetails friend={friend} onGoBack={handleGoBack} />
    </div>
  );
}

export default FriendsAppContainer;
