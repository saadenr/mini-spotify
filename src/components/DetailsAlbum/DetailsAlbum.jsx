import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  BsFillHeartFill,
  BsPeopleFill,
  BsAlarmFill,
  BsCalendarWeekFill,
  BsVinylFill,
} from "react-icons/bs";

import * as actions from "../../constants/index";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./DetailsAlbum.css";

const DetailsAlbum = () => {
  const { _id } = useParams();
  const [album, setAlbum] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    actions.getAlbum(_id).then((album) => {
      setAlbum(album);
      setTracks(album.tracks.data);
    });
  }, []);

  console.log(album);

  const renderAlbumDetails = () => {
    return (
      <div className="detailsAlbum-content grid text-center">
        <div className="content-left">
          <img src={album.cover_big} alt="cover" />
          <div className="infos">
            <div className="info">
              <BsAlarmFill className="icon" />
              <p className="sub-info">{`${
                Math.round((album.duration / 60) * 100) / 100
              } min`}</p>
            </div>
            <div className="info">
              <BsPeopleFill className="icon" />
              <p className="sub-info">{`${album.fans} fan`}</p>
            </div>
          </div>
          <div className="infos">
            <div className="info">
              <BsCalendarWeekFill className="icon" />
              <p className="sub-info">{album.release_date}</p>
            </div>
            <div className="info">
              <BsVinylFill className="icon" />
              <p className="sub-info">{album.label}</p>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="head">
            <h3 className="title">{album.title}</h3>
            <a href="/" className="item-link text-grey">
              <BsFillHeartFill size={20} />
            </a>
          </div>
          <p className="artist">{album.artist ? album.artist.name : null}</p>
          <div className="audio-preview">{renderTracks()}</div>
        </div>
      </div>
    );
  };

  const renderTracks = () => {
    return tracks && tracks.length
      ? tracks.map((track, index) => (
          <figure className="figure" key={index}>
            <figcaption className="caption-audio">{track.title}</figcaption>
            <audio controls src={track.preview}>
              {" "}
              votre nabigateur ne supporte pas <code>audio</code> html element.
            </audio>
          </figure>
        ))
      : null;
  };

  return album ? (
    <section className="detailsAlbum section-m bg-dark" id="detailsAlbum">
      <Navbar />
      <div className="container">{renderAlbumDetails()}</div>
      <Footer />
    </section>
  ) : null;
};

export default DetailsAlbum;
