import React, { useEffect, useState } from "react";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";

import SearchBar from "../components/SearchBar/SearchBar";
import * as actions from "../../constants/index";
import SingleAlbum from "./SingleAlbum";
import Pagination from "../pagination/Pagination";

import swal from "sweetalert";

import "./Albums.css";

const Albums = () => {
  const [albums, setAlbums] = useState({});
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    actions.getAlbums().then((album) => setAlbums(album));
    setCurrentPage(1);
  }, [favorites]);

  // ////////////// Pagination Process /////////////

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    albums && albums.length ? albums.slice(firstPostIndex, lastPostIndex) : [];

  // ///////////////////////////////////////////////

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
    const heartFill = <BsFillHeartFill size={20} style={{ color: "1ed760" }} />;
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
      ? currentPosts.map((item, index) => (
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
              <Pagination
                totalPosts={albums.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                albums={albums}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Albums;
