import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";

function GamesByGenreId({ gameList,selectedGenresName }) {
  useEffect(() => {
    console.log("GameList: ", gameList);
  }, []);
  return (
  <div>
    <h2 className="font-bold text-[30px] dark:text-white mt-5">{selectedGenresName} games</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {gameList.map((item) => (
        <div key={item.id} className="bg-blue-100 dark:bg-gray-900 p-2 rounded-lg pb-10 h-full
         hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer
        ">
          <img src={item.background_image} className="w-full h-[80%] rounded-xl object-cover"/>
          <h2 className="text-[20px] dark:text-white mt-2">
            {item.name} <span className="p-1 ml-2 text-[10px] bg-gray-500 rounded-sm
             text-white font-medium">{item.metacritic}</span>
          </h2>
          <h2 className="flex items-center dark:text-white">
            <div className="flex items-center">
            <FaStar className="text-yellow-300"/>
            {item.rating}
            </div>
            <div className="flex items-center ml-3">
            <AiFillMessage className="text-gray-900 dark:text-white"/>
            {item.reviews_count}
            </div>

            <div className="flex items-center ml-3">
            <AiFillFire className="text-orange-400"/>
            {item.suggestions_count}
            </div>
          </h2>

        </div>
      ))}
    </div>
    </div>
  );
}

export default GamesByGenreId;
