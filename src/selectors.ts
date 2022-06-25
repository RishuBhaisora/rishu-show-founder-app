import { State } from "./store";
import { values } from "lodash";

export const showListSelector = (s: State) => values(s.shows);