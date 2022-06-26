import axios from "axios";
import { AnyAction } from "redux";
import { show } from "./models/show";

export async function getShowList(action: AnyAction) {
  const data = await axios.get<{ show: show }[]>(
    `https://api.tvmaze.com/search/shows?q=${action.payload}`
  );
  return data.data.map((d) => d.show);
}

export async function getShow(action: AnyAction) {
  const response = await axios.get<show>(
    `https://api.tvmaze.com/shows/${action.payload}`
  );
  return response.data;
}
