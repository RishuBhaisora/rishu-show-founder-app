import { State } from "./store";
import { values } from "lodash";

export const showListSelector = (s: State) =>s.shows[s.showQuery] ||[]
export const showQuerySelector=(s:State)=>s.showQuery