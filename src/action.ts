import { show } from "./models/show";

export const SHOW_LIST_FETCH = "SHOW_LIST_FETCH";
export const SHOW_LIST_FETCHED = "SHOW_LIST_FETCHED";

export const showListFetch = () => ({ type: SHOW_LIST_FETCH });

export const showListFetched = (payload:show[]) => ({
  type: SHOW_LIST_FETCHED,
  payload: payload,
});
