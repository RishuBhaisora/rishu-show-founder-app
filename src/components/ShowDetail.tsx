import { FC, memo, useEffect } from "react";
import { withRouter, WithRouterProps } from "../hocs/withRouter";
import { show } from "../models/show";
import { showEntitiesSelector } from "../selectors";
import { State } from "../store";
import { connect } from "react-redux";
import { showFetch } from "../action";
import { Link, useNavigate } from "react-router-dom";

type ShowDetailProps = {
  show: show;
  fetchShow: (id: string) => void;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({ show, fetchShow, params }) => {
  useEffect(() => {
    fetchShow(params.id);
  }, []);
  if (!show) {
    return <div className=" text-2xl font-bold">Loading.....</div>;
  }

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className=" text-2xl font-bold">DETAILS</h1>
        <Link to="/" className="underline cursor-pointer text-2xl font-bold">
          GO BACK
        </Link>
      </div>
      <div className="flex flex-row-reverse text-white items-stretch p-2 bg-indigo-800 roundd-md">
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
    </div>
  );
};

ShowDetail.defaultProps = {};
const mapStateToProps = (s: State, props: any) => ({
  show: showEntitiesSelector(s)[+props.params.id],
});
const mapDispatchToProps = {
  fetchShow: showFetch,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
