import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Paginations from "./components/Pagination";

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [info, setInfo] = useState({});
  

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fectCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
      setCharacter(data.results);
      setInfo(data.info);
  })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fectCharacters(initialUrl);
  }, []);

  const onPrev = () => {fectCharacters(info.prev)};
  const onNext = () => {fectCharacters(info.next)};
  return (
    <>
      <Navbar brand="Rick y Morty App" />
      <div className="container mt-5 pt-4">
          <Paginations prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
            <Characters characters={characters} />
          <Paginations prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
      </div>
    </>
  );
};

export default App;
