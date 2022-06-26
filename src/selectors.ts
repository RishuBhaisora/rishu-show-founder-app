import { State } from "./store";
import { values } from "lodash";

export const showListSelector = (s: State) => {
    const showId = s.shows.againstQuery[s.shows.query]||[]
    return showId.map(id=>s.shows.entities[id])
}
export const showQuerySelector=(s:State)=>s.shows.query