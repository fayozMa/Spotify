import React, { useState } from "react";
import { Link } from "react-router-dom";

function Mixes({ name, api}) {
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl">{name}</h1>
        <button onClick={handleSeeAll}>
          {showAll ? "SHOW LESS" : "SEE ALL"}
        </button>
      </div>
      <div className="flex flex-wrap gap-8">
        {api.items &&(showAll ? api.items : api.items?.slice(0, 4)).map((item, index) => (
          <Link to={`/details/${item.id}`}
            key={index}
            className="flex flex-col gap-5 w-[190px] py-5 px-5 bg-white bg-opacity-5 rounded-md"
          >
            <img src={item.images[0].url} width={182} height={182} alt={item.name} />
            <h1 className="font-bold text-xl text-white">{item.name}</h1>
            <p className="text-lg ">{item.owner.display_name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mixes;
