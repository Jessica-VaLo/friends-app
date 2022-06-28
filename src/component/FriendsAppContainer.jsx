import React, { useState, useEffect } from "react";
// import friends from "../friendsData.json";
// import friend from "../friendDetails.json";
// import photos from "../photosFriends.json";
import FriendsList from "./FriendsList";
import FriendsDetails from "./FriendsDetails";
import StatusContext from "./../context/statusContext";
import { getFriend, getFriends } from "../services/friendsServices";
import { getPhotos } from "../services/friendsServices";
import styles from "../css/FriendsAppContainer.module.css";

function FriendsAppContainer() {
  const [showDetails, setShowDetails] = useState(false);
  const [friends, setFriends] = useState([]);
  const [friendDetails, setFriendDetails] = useState();
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState();

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

    setShowDetails(true);

    //Providing context for status, since the api for details
    //does not provide the current status
    id = 6; //setting id to the only detail providen
    const currentStatus = friends.find((friend) => {
      return friend.id === id;
    }).status;
    setStatus(currentStatus);

    //calling the photos api
    const data = await getPhotos(friend.photos);
    setPhotos(data);
  };

  const handleGoBack = () => {
    console.log("Go back");
    setShowDetails(false);
  };

  return (
    <StatusContext.Provider value={status}>
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
    </StatusContext.Provider>
  );
}

export default FriendsAppContainer;
