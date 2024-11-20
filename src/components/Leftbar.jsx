import React, { useEffect, useState } from "react";
import http from "../axios";
import { Link } from "react-router-dom";

function Leftbar() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    http
      .get("browse/categories/toplists/playlists")
      .then((response) => {
        setSongs(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-[#B3B3B3] pt-[70px] pl-8 pr-8">
      <div className="menu flex flex-col gap-5">
        <a href="/" className="flex items-center gap-5 leading-6">
          <img src="../icons/Home.svg" alt="Home" />
          <p className="font-bold teaxt-base text-white">Home</p>
        </a>
        <a href="" className="flex items-center gap-5 leading-6">
          <img src="../icons/Search_S.svg" alt="Search" />
          <p className="font-bold teaxt-base">Search</p>
        </a>
        <a href="" className="flex items-center gap-5 leading-6">
          <img src="../icons/Library_S.svg" alt="Library" />
          <p className="font-bold teaxt-base">Your Library</p>
        </a>
      </div>
      <div className="action mt-12 flex flex-col gap-5">
        <a href="" className="flex items-center gap-2 leading-6">
          <img src="../icons/+Library_S.svg" alt="Create Playlist" />
          <p className="font-bold teaxt-base">Create Playlist</p>
        </a>
        <Link to="/likes" className="flex items-center gap-2 leading-6">
          <img src="../icons/LikedSongs_S.svg" alt="Liked Songs" />
          <p className="font-bold teaxt-base text-white">Liked Songs</p>
        </Link>
      </div>
      <div className="musics border-t-2 border-[#B3B3B3] mt-12 flex flex-col">
        {songs.items?.map((song) => (
          <Link to={`/details/:${song.id}`} key={song.id} href="#" className="text-[#B3B3B3] teaxt-base mt-5">
            {song.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Leftbar;
