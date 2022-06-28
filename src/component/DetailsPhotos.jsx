import React from "react";
import photos from "../photosFriends.json";
import PhotoGallery from "../common/PhotoGallery";

function DetailsPhotos() {
  const handleZoom = (photo) => {
    console.log(photo);
  };
  return <PhotoGallery photos={photos.photos} onZoom={handleZoom} />;
}

export default DetailsPhotos;
