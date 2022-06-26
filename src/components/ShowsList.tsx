import { ChangeEvent, FC, memo, useEffect } from "react";
import { showListFetch } from "../action";
import { showListSelector, showQuerySelector } from "../selectors";
import { State } from "../store";
import { connect } from "react-redux";
import { show } from "../models/show";
import ShowRow from "./ShowRow";

type showListProps = {
  showList: show[];
  showQuery: string;
  showListFetch: (payLoad: string) => void;
};

const ShowsList: FC<showListProps> = ({
  showQuery,
  showList,
  showListFetch,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    showListFetch(event.target.value);
  };

  return (
    <div className="p-5 space-y-3">
      <input
        value={showQuery}
        onChange={handleChange}
        className="border  border-yellow-400   rounded-sm text-center px-4"
        placeholder="Search"
      />
      <div className=" space-y-3 mt-3">
        {showList.map((s) => (
          <ShowRow key={s.id} show={s} />
        ))}
      </div>
    </div>
  );
};

ShowsList.defaultProps = {};

const mapStateToProps = (s: State) => ({
  showList: showListSelector(s) ,
  showQuery: showQuerySelector(s),
});

const mapDispatchToProps = {
  showListFetch: showListFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowsList));
