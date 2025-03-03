import React, { useEffect } from "react";

function TreandingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, [gameList]); // ✅ Added dependency to reflect updates

  return (
    <div className="mt-5">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id} 
                className="bg-blue-100 rounded-lg p-2 dark:bg-gray-900 group
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                  alt={item.name} 
                />
                <div className="dark:text-white p-2">
                  <h2 className="font-bold text-[20px]">{item.name}</h2>
                  <p>{item.rating}</p>
                  <span>{item.released}</span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TreandingGames;
