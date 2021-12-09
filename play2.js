import {useState, useEffect} from 'react';
import Player from '../components/Player/Player';


function Play2() {
  const [songs] = useState([
    {
      title: "Alternative",
      artist: "Nocopyright",
      img_src: "./images/song-1.jpg",
      src: "./music/altRock.mp3"
    },
    {
      title: "Rock",
      artist: "Nocopyright",
      img_src: "./images/song-2.jpg",
      src: "./music/Rock.mp3"
    },
    {
      title: "Fur Elise",
      artist: "Beethoven",
      img_src: "./images/song-3.jpg",
      src: "./music/Beethoven.mp3"
    },
    {
      title: "Turkish March",
      artist: "Mozart",
      img_src: "./images/song-4.jpg",
      src: "./music/Turkish.mp3"
    },
    {
      title: "Serenity",
      artist: "Lofi",
      img_src: "./images/song-5.png",
      src: "./music/serenity.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default Play2;