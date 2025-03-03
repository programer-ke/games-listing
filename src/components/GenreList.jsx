import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({genreId,selectedGenresName}) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    GlobalApi.getGenreList()
      .then((resp) => {
        setGenreList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
      {genreList.map((item, index) => (
        <div
        key={item.id} 
            onClick={()=>{setActiveIndex(index);genreId(item.id);
              selectedGenresName(item.name)
            }}
          className={`flex gap-2 items-center mb-2 cursor-pointer  
                hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-800 group
                ${activeIndex == index?"bg-gray-300 dark:bg-gray-600":null}
                `}
        >
          <img
            src={item.image_background}
            className={`h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105
                    transition-all ease-out duration-300 ${activeIndex == index?"scale-105":null}
                    `}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold
                    transition-all ease-out duration-300 ${activeIndex == index?"font-bold":null}
                    `}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
