import axios from "axios";
import { show } from "./models/show";

export async function getShowList() {
  const data = await axios.get<{ show: show }[]>(
    "https://api.tvmaze.com/search/shows?q=girls"
  );
  return data.data.map(d => d.show);
}
