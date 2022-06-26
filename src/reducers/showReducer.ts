import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_LIST_FETCH, SHOW_LIST_FETCHED } from "../action";
import { show } from "../models/show";

type Show = {
  entities: { [id: number]: show[] };
  againstQuery: { [q: string]: number[] };
  query: string;
};
const initialShowState: Show = {
  entities: {},
  againstQuery: {},
  query: "",
};

const showReducer: Reducer<Show> = (showState = initialShowState, action) => {
  switch (action.type) {
    case SHOW_LIST_FETCH: {
      const query = action.payload;
      return { ...showState, query: query };
    }
    case SHOW_LIST_FETCHED: {
      const { shows, query }: { shows: show[]; query: string } = action.payload;
      const showEntity = new schema.Entity("shows");
      const normalized = normalize(shows, [showEntity]);
      const normalizedShows = normalized.entities.shows;
      const ids = shows.map((s) => s.id);

      return {
        ...showState,
        entities: { ...showState.entities, ...normalizedShows },
        againstQuery: { ...showState.againstQuery, [query]: ids },
      };
    }
    default: {
      return showState;
    }
  }
};
export default showReducer;
