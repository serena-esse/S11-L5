import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_FAV, ADD_TO_PLAYER, REMOVE_FROM_FAV, REMOVE_FROM_SAVED, SAVE_TO_FAV } from "../redux/actions/actions";

const AlbumCard = ({ song }) => {
  // Estrae le informazioni necessarie sulla canzone dall'oggetto 'song' passato come props
  const { album, artist, id } = song;
  // Utilizza useDispatch per inviare azioni allo store Redux
  const dispatch = useDispatch();
  // Estrae lo stato globale relativo alle canzoni preferite dallo store Redux
  const favSongs = useSelector((state) => state.fav.favSongs);
  // Gestisce il clic sull'icona del cuore per aggiungere o rimuovere la canzone dai preferiti
  const handleFavoriteClick = () => {
    if (favSongs?.includes(id)) {
      // Se la canzone è già nei preferiti, rimuovila dai preferiti e dai salvati
      dispatch({ type: REMOVE_FROM_FAV, payload: id });
      dispatch({ type: REMOVE_FROM_SAVED, payload: id });
    } else {
      // Se la canzone non è nei preferiti, aggiungila ai preferiti e ai salvati
      dispatch({ type: ADD_TO_FAV, payload: id });
      dispatch({ type: SAVE_TO_FAV, payload: song });
    }
  };

  return (
    <>
      <Col className="text-center position-relative myCardSongs">
        <img
          variant="top"
          className="img-fluid"
          src={album.cover_medium}
          onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}
          alt="album"
        />
        <span className="myPlayIcon" onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}>
          <i className="far fa-play-circle"></i>
        </span>

        <Row>
          <div>
            <Link to={`/album/${album.id}`} className="text-decoration-none">
              <p className="m-0">
                Album: {album.title.length < 16 ? album.title : `${album.title.substring(0, 12)}...`}
              </p>
            </Link>

            <p className="d-flex justify-content-center align-items-center">
              <Link to={`/artist/${artist.id}`} className="text-decoration-none">
                Artist: {artist.name}
              </Link>
              <button className="addToFav" onClick={handleFavoriteClick} style={{ color: favSongs?.includes(id) }}>
                <span id={`fav-${id}`}>
                  {favSongs?.includes(id) ? (
                    <i className="fas fa-heart" style={{ color: "green" }}></i>
                  ) : (
                    <i className="far fa-heart"></i>
                  )}
                </span>
              </button>
            </p>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default AlbumCard;
