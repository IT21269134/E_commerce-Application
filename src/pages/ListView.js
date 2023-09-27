import TopBar from "../components/TopBar";
import TitleNew from "../components/TitleNew";
import StatisticCardList from "../components/StatisticCardList";
import ProjectList1 from "../components/ProjectList1";
import "./ListView.css";

const ListViewNew = () => {
  return (
    <div className="list-view1">
      <main className="body1">
        <TopBar />
        <TitleNew />
        <StatisticCardList />
        <ProjectList1 />
      </main>
    </div>
  );
};

export default ListViewNew;
