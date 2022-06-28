import React, { useState } from "react";
import photos from "../photosFriends.json";
import PhotoGallery from "../common/PhotoGallery";
import Popup from "../common/Popup";

function DetailsPhotos() {
  const [zoom, setZoom] = useState(false);
  const [photo, setPhoto] = useState();

  const handleZoom = (photo) => {
    console.log(photo);
    setPhoto(photo);
    setZoom(true);
  };

  const handleClose = () => {
    console.log("close");
    setZoom(false);
  };

  return (
    <React.Fragment>
      <PhotoGallery photos={photos.photos} onZoom={handleZoom} />
      {zoom && <Popup source={photo} onClose={handleClose} />}
    </React.Fragment>
  );
}

export default DetailsPhotos;
