import React, { useEffect, useState } from "react";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";

import SearchBar from "../components/SearchBar/SearchBar";
import * as actions from "../../constants/index";
import SingleAlbum from "./SingleAlbum";

import swal from "sweetalert";

import "./Albums.css";

const Albums = () => {
  const [albums, setAlbums] = useState({});
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    actions.getAlbums().then((album) => setAlbums(album));
  }, [favorites]);

  const searchAlbums = (term) => {
    actions.getAlbums(term).then((item) => setAlbums(item));
  };

  const addToFavorites = (album) => {
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(oldFavorites);

    if (checkAlbum(oldFavorites, album)) {
      swal({
        icon: "error",
        title: "Album Exists !",
        text: "Album already added to your favourites",
      });
      return false;
    }

    oldFavorites.push(album);
    let favorites = oldFavorites;
    localStorage.setItem("favorites", JSON.stringify(favorites));
    swal({
      icon: "success",
      title: "Album Added !",
      text: "Album added to your favourites",
    });
  };

  const handleHeart = (album) => {
    const heart = <BsHeart size={20} />;
    const heartFill = (
      <BsFillHeartFill size={20} style={{ color: "#1ed760" }} />
    );
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (checkAlbum(oldFavorites, album)) {
      return heartFill;
    }
    return heart;
  };

  const checkAlbum = (albums, album) => {
    let found = albums.some(function (item) {
      return item.album.id === album.album.id;
    });

    return found;
  };

  const renderAlbums = () => {
    return albums && albums.length
      ? albums.map((item, index) => (
          <SingleAlbum
            album={item}
            key={index}
            heartIcon={handleHeart}
            addToFavorites={addToFavorites}
          />
        ))
      : null;
  };

  return (
    <section className="albums bg-md-black" id="albums">
      <SearchBar searchAlbums={searchAlbums} />
      {albums && albums.length ? (
        <div className="container">
          <div className="albums-content">
            <div className="item-list grid text-white text-center">
              {albums && renderAlbums()}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Albums;
