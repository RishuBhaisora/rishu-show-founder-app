import { show } from "./models/show";
import { State } from "./store";

export const showListSelector = (s: State) => {
  const showId = s.shows.againstQuery[s.shows.query]||[];
  const data = showId.map((id) => s.shows.entities[id]);

  return data;
};
export const showQuerySelector = (s: State) => s.shows.query;
