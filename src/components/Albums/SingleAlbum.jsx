import React from "react";
import { Link } from "react-router-dom";

import "./Albums.css";

const SingleAlbum = ({ album, addToFavorites, heartIcon }) => {
  const formatTitle = (title) => {
    return title.split(" ").length > 2
      ? title.split(" ").slice(0, 3).join(" ") + " ..."
      : title;
  };

  return (
    <div className="item bg-dark translate-effect">
      <Link to={`/details/${album.album.id}`} target="_blank">
        <img alt="album_cover" src={album.album.cover_big} />
      </Link>

      <div className="container flex flex-between">
        <h4 className="item-title fs-16">{formatTitle(album.title)}</h4>
        <button
          onClick={() => addToFavorites(album)}
          className="item-link text-grey"
        >
          {heartIcon(album)}
        </button>
      </div>
      <p className="container fs-14 text">{album.artist.name}</p>
    </div>
  );
};

export default SingleAlbum;
