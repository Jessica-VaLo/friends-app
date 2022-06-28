import React, { useState } from "react";
import friends from "../friendsData.json";
import friend from "../friendDetails.json";
import styles from "../css/FriendsAppContainer.module.css";
import FriendsListContainer from "./FriendsListContainer";
import FriendsDetails from "./FriendsDetails";

function FriendsAppContainer() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    console.log("Show details");
    setShowDetails(true);
  };

  const handleGoBack = () => {
    console.log("Go back");
    setShowDetails(false);
  };

  return (
    <div className={styles.container}>
      {!showDetails && (
        <FriendsListContainer
          friends={friends}
          onShowDetails={handleShowDetails}
        />
      )}
      {showDetails && (
        <FriendsDetails friend={friend} onGoBack={handleGoBack} />
      )}
    </div>
  );
}

export default FriendsAppContainer;
