import { useSelector } from "react-redux";
import AlbumCardRow from "./AlbumCardRow";

const YourLibrary = () => {
  // Utilizzo hook useSelector per estrarre lo stato globale relativo alle canzoni preferite
  const savedSongs = useSelector((state) => state.fav.savedFavSongs);
  return (
    <>
      <div className="favouriteSongs">
        {savedSongs.length > 0 ? (
          <AlbumCardRow title="Your favourite songs" songs={savedSongs} />
        ) : (
          <>
            <h1>You haven't added any songs yet</h1>
            <h4>Click the heart icon to add to your library!</h4>
          </>
        )}
      </div>
    </>
  );
};
export default YourLibrary;
