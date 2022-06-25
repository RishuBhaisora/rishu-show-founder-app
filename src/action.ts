import { show } from "./models/show";

export const SHOW_LIST_FETCH = "SHOW_LIST_FETCH";
export const SHOW_LIST_FETCHED = "SHOW_LIST_FETCHED";

export const showListFetch = (payLoad:string) => ({ type: SHOW_LIST_FETCH,payload:payLoad });

export const showListFetched = (shows: show[], query: string) => ({
  type: SHOW_LIST_FETCHED,
  payload: { shows, query },
});
