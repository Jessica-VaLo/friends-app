import React, { useState } from "react";

import PhotoGallery from "../common/PhotoGallery";
import Popup from "../common/Popup";

function DetailsPhotos({ photos }) {
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
      <PhotoGallery photos={photos} onZoom={handleZoom} />
      {zoom && <Popup source={photo} onClose={handleClose} />}
    </React.Fragment>
  );
}

export default DetailsPhotos;
