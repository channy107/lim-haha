import HeaderTitle from "./HeaderTitle";
import RecentVisited from "./RecentVisited";
import Tabs from "./Tabs";
import TopBar from "./TopBar";

export default function Header() {
    return (
      <>
        <TopBar />
        <HeaderTitle />
        <Tabs />
        <RecentVisited />
      </>
    )
  }