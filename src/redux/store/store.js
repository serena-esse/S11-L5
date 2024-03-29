import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ReducerAlbum } from "../reducers/ReducerAlbum";
import { ReducerArtist } from "../reducers/ReducerArtist";
import { ReducerFavourites } from "../reducers/ReducerFavourites";
import { ReducerMain } from "../reducers/ReducerMain";
import { ReducerPlayer } from "../reducers/ReducerPlayer";
import { ReducerSearch } from "../reducers/ReducerSearch";

const Reducers = combineReducers({
  mainSongs: ReducerMain,
  fav: ReducerFavourites,
  search: ReducerSearch,
  player: ReducerPlayer,
  artist: ReducerArtist,
  album: ReducerAlbum,
});

export const store = configureStore({
  reducer: Reducers,
});
