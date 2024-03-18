import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <main>
        <FetchItems />
        <div className="items-container">
          {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
