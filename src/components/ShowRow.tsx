import { FC, memo } from "react";
import { show } from "../models/show";

type ShowRowProps = {
  show: show;
};

const ShowRow: FC<ShowRowProps> = ({ show }) => {
  return (
    <div className="flex items-stretch p-2 bg-gray-200 roundd-md">
      <div className="w-20 shrink-0">
        <img
          className="w-full"
          src={
            show.image?.medium ||
            "https://www.slntechnologies.com/wp-content/uploads/2017.08/ef3-placeholder-image.jpg"
          }
        />
      </div>
      <div className="ml-2">
        <h1>{show.name}</h1>
        <h1>{show.summary}</h1>
      </div>
    </div>
  );
};

ShowRow.defaultProps = {};

export default memo(ShowRow);
