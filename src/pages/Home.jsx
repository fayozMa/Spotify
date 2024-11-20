import React from "react";
import { useEffect, useState } from "react";
import http from "../axios";
import Mixes from "../components/Mixes";
import { Link } from "react-router-dom";
function Home() {
  const [hero, setHero] = useState([]);
  const [mix1, setmix1] = useState([]);
  const [mix2, setmix2] = useState([]);
  const [mix3, setmix3] = useState([]);
  const [mix4, setmix4] = useState([]);
  const [mix5, setmix5] = useState([]);
  useEffect(() => {
    http
      .get("browse/featured-playlists")
      .then((response) => {
        setHero(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });

    http
      .get("browse/categories/toplists/playlists")
      .then((response) => {
        setmix1(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });

    http
      .get("browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
      .then((response) => {
        setmix2(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });

    http
      .get("browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
      .then((response) => {
        setmix3(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });
    http
      .get("browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
      .then((response) => {
        setmix4(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });
    http
      .get("browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
      .then((response) => {
        setmix5(response.data.playlists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="bg-custom-gradient-home px-5">
      <div className="flex items-center gap-2 py-5">
        <button className="btn btn-circle bg-opacity-70 text-2xl">&lt;</button>
        <button className="btn btn-circle bg-opacity-70 text-2xl">&gt;</button>
      </div>
      <div className="main flex flex-col gap-7 mb-12">
        <h1 className="font-bold text-white text-4xl">Good afternoon</h1>
        <div className="flex flex-wrap gap-6">
          {hero.items?.slice(0, 6).map((item, index) => (
            <Link to={`/details/:${item.id}`}
              className="items-center bg-white bg-opacity-10 flex w-[420px] gap-5 rounded-md"
              key={index}
            >
              <img src={item.images[0].url} className="h-20" />
              <h1 className="text-white font-bold text-lg">{item.name}</h1>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-14 pb-28">
        {mix1 && <Mixes name={"Your top mixes"} api={mix1} />}
        {mix2 && <Mixes name={"Made for you"} api={mix2} />}
        {mix3 && <Mixes name={"Recently played"} api={mix3} />}
        {mix4 && <Mixes name={"Jump back in"} api={mix4} />}
        {mix5 && <Mixes name={"Uniquely yours"} api={mix5} />}
      </div>
    </div>
  );
}

export default Home;
