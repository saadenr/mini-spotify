import React, { useEffect, useState } from "react";

import * as actions from "../../constants/index";
import SingleFavourite from "./SingleFavourite";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import swal from "sweetalert";

import "./Favourites.css";

const FavouritesAlbums = () => {
  const [favouritesAlbums, setFavouritesAlbums] = useState({});
  const [updater, setUpdater] = useState(false);

  useEffect(() => {
    setFavouritesAlbums(JSON.parse(actions.getFavouritesAlbums()));
  }, [updater]);

  const removeFromFavorites = (album) => {
    let oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let favorites = oldFavorites.filter(
      (item) => item.album.id !== album.album.id
    );

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setUpdater(!updater);
    swal({
      icon: "success",
      title: "Album Deleted !",
      text: "Album deleted from your favourites",
    });
  };

  const renderAlbums = () => {
    return favouritesAlbums && favouritesAlbums.length
      ? favouritesAlbums.map((item, index) => (
          <SingleFavourite
            album={item}
            key={index}
            removeFromFavorites={removeFromFavorites}
          />
        ))
      : null;
  };

  return favouritesAlbums && favouritesAlbums.length ? (
    <>
      <Navbar />
      <section className="favourites bg-md-black" id="favourites">
        <div className="container">
          <div className="favourites-content">
            <div className="item-list grid text-white text-center">
              {favouritesAlbums && renderAlbums()}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  ) : null;
};

export default FavouritesAlbums;
