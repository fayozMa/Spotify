import React, { useEffect, useState } from "react";
import http from "../axios";
import { useParams } from "react-router-dom";

function Details() {
  const [details, setDetails] = useState(null);
  const [favorites, setFavorites] = useState({});
  const { id } = useParams();

  const toggleFavorite = (trackId) => {
    setFavorites((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  useEffect(() => {
    http
      .get(`playlists/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="px-5">
      <div className="flex items-center gap-2 py-5">
        <button className="btn btn-circle bg-opacity-70 text-2xl">&lt;</button>
        <button className="btn btn-circle bg-opacity-70 text-2xl">&gt;</button>
      </div>
      {details && details.images && details.images.length > 0 ? (
        <div className="flex gap-8 items-center">
          <img src={details.images[0].url} alt={details.name} />
          <div>
            <p className="text-white text-base font-medium">
              {details.public ? "Public Playlist" : "Private Playlist"}
            </p>
            <h1 className="text-[90px] font-black text-white">
              {details.name}
            </h1>
            <p className="font-bold text-white mt-3">
              {details.owner?.display_name}
            </p>
            <p className="mt-3 text-white">
              Made for{" "}
              <span className="font-bold">{details.owner?.display_name}</span> •{" "}
              {details.tracks.total} songs
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="mt-14 flex justify-between items-center">
        <div className="actions">
          <div className="flex items-center gap-5">
            <button className="btn btn-ghost h-24 hover:bg-transparent">
              <img src="../icons/Play_Greem.svg" alt="Play" />
            </button>
            <button className="btn btn-ghost btn-circle hover:bg-transparent">
              <img src="../icons/Heart_XS.svg" alt="Heart" />
            </button>
            <button className="btn btn-ghost btn-circle hover:bg-transparent">
              <img src="../icons/Download_XS.svg" alt="Download" />
            </button>
            <button className="btn btn-ghost btn-circle hover:bg-transparent">
              <img src="../icons/Options_XS.svg" alt="Options" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="btn-circle btn btn-ghost hover:bg-transparent">
            <img src="../icons/Search.svg" alt="Search" />
          </button>
          <select className="select select-ghost max-w-xs">
            <option disabled>Custom order</option>
            <option>Top to Bottom</option>
            <option>Bottom to Top</option>
            <option>Custom order</option>
          </select>
        </div>
      </div>
      <div className="mt-8">
        <table className="w-full text-left text-sm text-gray-400">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-2">#</th>
              <th className="p-2">TITLE</th>
              <th className="p-2">ALBUM</th>
              <th className="p-2">DATE ADDED</th>
              <th className="p-2 text-right">
                <img src="../icons/Clock_XS.svg" alt="Clock" />
              </th>
            </tr>
          </thead>
          <tbody>
            {details?.tracks.items?.map((track, index) => (
              <tr
                key={track.track.id}
                className="border-b border-gray-700 hover:bg-gray-800"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 flex items-center">
                  <img
                    src={track.track.album.images[0]?.url}
                    alt={track.track.name}
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <p className="text-white">{track.track.name}</p>
                    <p className="text-xs text-gray-400">
                      {track.track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                  </div>
                </td>
                <td className="p-2">{track.track.album.name}</td>
                <td className="p-2">{new Date(track.added_at).toLocaleDateString()}</td>
                <td className="p-2 text-right">
                  <button
                    className="mr-3 text-2xl"
                    onClick={() => toggleFavorite(track.track.id)}
                    aria-label={
                      favorites[track.track.id]
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {favorites[track.track.id] ? "💚" : "♡"}
                  </button>
                  {formatDuration(track.track.duration_ms)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
