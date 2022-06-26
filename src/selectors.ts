import { show } from "./models/show";
import { State } from "./store";
import { createSelector } from "reselect";

const showsSelector = (s: State) => s.shows;
const showsAgainstQuerySelector = createSelector(
  showsSelector,
  (shows) => shows.againstQuery
);
export const showEntitiesSelector = createSelector(
  showsSelector,
  (shows) => shows.entities
);
export const showQuerySelector = createSelector(
  showsSelector,
  (shows) => shows.query
);
const showIdSelector = createSelector(
  showsAgainstQuerySelector,
  showQuerySelector,
  (againstQuery, query) => againstQuery[query] || []
);
export const showListSelector = createSelector(
  showIdSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id]) as any as show[]
);
