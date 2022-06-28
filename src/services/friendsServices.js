import http from "./httpServices";
import { getFlickrPhoto } from "./flickrServices";

const apiEndpoint = "https://private-5bdb3-friendmock.apiary-mock.com/friends";

export function getFriends() {
  return http.get(apiEndpoint);
}

export function getFriend(id = "id") {
  return http.get(`${apiEndpoint}/${id}`);
}

export async function getPhotos(photosUrl) {
  const photos = await Promise.all(
    photosUrl.map(async (url) => {
      return await getFlickrPhoto(url);
    })
  );
  return photos;
}
