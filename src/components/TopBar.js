import "./TopBar.css";

const TopBar = () => {
  return (
    <section className="top-bar1">
      <div className="searchbar1">
        <div className="icon16">
          <img className="fi-rr-search-icon1" alt="" src="./firrsearch1.svg" />
        </div>
        <div className="search1">Search</div>
      </div>
      <div className="right1">
        <div className="menu2">
          <button className="icon-img-menu4">
            <div className="icon17">
              <img
                className="fi-sr-calendar-icon8"
                alt=""
                src="/fisrcalendar4.svg"
              />
            </div>
          </button>
          <button className="icon-img-menu4">
            <div className="icon18">
              <img className="fi-sr-bell-icon1" alt="" src="/fisrbell1.svg" />
              <div className="notification-badge3">
                <div className="text57">2</div>
              </div>
            </div>
          </button>
          <button className="icon-img-menu4">
            <div className="icon18">
              <img
                className="fi-sr-bell-icon1"
                alt=""
                src="/fisrenvelope1.svg"
              />
              <div className="notification-badge3">
                <div className="text57">2</div>
              </div>
            </div>
          </button>
          <div className="icon-img-menu7">
            <img className="img-icon31" alt="" src="/img@2x.png" />
          </div>
        </div>
        <img className="divider-icon1" alt="" src="/divider1.svg" />
        <div className="user1">
          <div className="avatar1">
            <div className="notif1" />
          </div>
          <div className="name1">
            <div className="jay-hargudson1">Jay Hargudson</div>
            <div className="manager1">Manager</div>
          </div>
          <button className="icon20">
            <img
              className="fi-sr-calendar-icon8"
              alt=""
              src="/fisrcaretdown1.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
