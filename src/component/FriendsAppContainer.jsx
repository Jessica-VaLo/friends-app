import React, { useState, useEffect } from "react";
// import friends from "../friendsData.json";
// import friend from "../friendDetails.json";
// import photos from "../photosFriends.json";
import FriendsList from "./FriendsList";
import FriendsDetails from "./FriendsDetails";
import { getFriend, getFriends } from "../services/friendsServices";
import { getPhotos } from "../services/friendsServices";
import styles from "../css/FriendsAppContainer.module.css";

function FriendsAppContainer() {
  const [showDetails, setShowDetails] = useState(false);
  const [friends, setFriends] = useState([]);
  const [friendDetails, setFriendDetails] = useState();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data: friends } = await getFriends();
      setFriends(friends);
    }

    getData();
  }, []);

  const handleShowDetails = async (id) => {
    console.log("Show details", id);

    //should pass the id of the friend for every details request
    //but the api currently has only one detail end point
    //the function is preconfig with "id" for defect
    const { data: friend } = await getFriend();
    setFriendDetails(friend);

    //calling the photos api
    const data = await getPhotos(friendDetails.photos);
    setPhotos(data);

    setShowDetails(true);
  };

  const handleGoBack = () => {
    console.log("Go back");
    setShowDetails(false);
  };

  return (
    <div className={styles.container}>
      {!showDetails && (
        <FriendsList friends={friends} onShowDetails={handleShowDetails} />
      )}
      {showDetails && (
        <FriendsDetails
          friend={friendDetails}
          photos={photos}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
}

export default FriendsAppContainer;
