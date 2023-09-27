import "./StatisticCardList.css";

const StatisticCardList = () => {
  return (
    <div className="statistic-card5">
      <div className="statistic-card6">
        <div className="title-numbers8">
          <div className="title-numbers9">
            <div className="text60">In Progress</div>
            <div className="text61">1,920</div>
          </div>
          <div className="badge4">
            <img
              className="fi-sr-time-fast-icon1"
              alt=""
              src="/fisrtimefast1.svg"
            />
          </div>
        </div>
      </div>
      <div className="statistic-card6">
        <div className="title-numbers8">
          <div className="title-numbers9">
            <div className="text60">Finished</div>
            <div className="text61">4,412</div>
          </div>
          <div className="badge5">
            <img
              className="fi-sr-time-fast-icon1"
              alt=""
              src="/fisrtimecheck1.svg"
            />
          </div>
        </div>
      </div>
      <div className="statistic-card6">
        <div className="title-numbers8">
          <div className="title-numbers9">
            <div className="text60">Unfinished</div>
            <div className="text61">329</div>
          </div>
          <div className="badge6">
            <img
              className="fi-sr-time-fast-icon1"
              alt=""
              src="/fisrtimedelete1.svg"
            />
          </div>
        </div>
      </div>
      <a className="statistic-card9">
        <div className="title-numbers8">
          <div className="title-numbers9">
            <div className="text60">Not Started</div>
            <div className="text61">123</div>
          </div>
          <div className="badge7">
            <img
              className="fi-sr-time-fast-icon1"
              alt=""
              src="/fisrfile1.svg"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default StatisticCardList;
