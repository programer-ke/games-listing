import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TreandingGames from "../components/TreandingGames";
import GamesByGenreId from "../components/GamesByGenreId";
import Footer from "../components/Footer";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [ gameListByGenres, setGamelistByGenres ] =useState([])
  const [ selectedGenresName, setSelectedGenresName ] =useState("Action")

  const getAllGamesList = () => {
    GlobalApi.getAllGames()
      .then((resp) => {
        setAllGameList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getGameListByGenresId=(id)=>{
    console.log("Genres Id: ",id)
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      setGamelistByGenres(resp.data.results)
    })
  }
  return (
    <>
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList genreId={(genreId)=>getGameListByGenresId(genreId)}
        selectedGenresName={(name)=>setSelectedGenresName(name)}
         />
      </div>

      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0&&gameListByGenres.length>0? (
          <div className="mb-5">
          <Banner gameBanner={allGameList[0]} />
          {/* <TreandingGames gameList={allGameList}/> */}
          <GamesByGenreId gameList={gameListByGenres}
          selectedGenresName={selectedGenresName}
          />
          </div>
        ) : null}{" "}
        <TreandingGames gameList={allGameList}/> 
      </div>
    </div>
        <Footer/>
    </>

  );
}

export default Home;
