import { State } from "./store";
import { values } from "lodash";

export const showListSelector = (s: State) => values(s.shows);
export const showQuerySelector=(s:State)=>s.showQuery