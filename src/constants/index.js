import axios from "axios";

const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 30000,
  headers: {
    "X-RapidAPI-Key": "8a61cea5fcmsh6600bfade90be4fp19f84ejsn489a514717b5",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export function getAlbums(search = "maroc") {
  const albums = request
    .get(`search?q=${search}&limit=24`)
    .then((response) => response.data.data)
    .catch((error) => console.log("error", error));
  return albums;
}

export function getAlbum(id) {
  const album = request
    .get(`album/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log("error", error));
  return album;
}

export function getFavouritesAlbums() {
  const albums = localStorage.getItem("favorites");
  return albums;
}
