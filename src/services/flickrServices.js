import http from "./httpServices";
import { base58_decode } from "./../utils/base58_decode";

export async function getFlickrPhoto(shortUrl) {
  const snipcode = shortUrl.split("/").pop();

  const photoId = base58_decode(snipcode);

  const { data } = await http.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=44458ec68ed4be3e19247d05ebcfeffb&photo_id=${photoId}&format=rest`
  );

  const arr = data.split("photo")[1].split(`"`);
  const photo = arr[1];
  const secret = arr[3];
  const server = arr[5];

  return `https://live.staticflickr.com/${server}/${photo}_${secret}_b.jpg`;
}
