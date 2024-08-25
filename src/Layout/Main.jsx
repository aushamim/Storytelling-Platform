import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <Nav />
      <Toaster />

      {/* All Pages */}
      <div className="min-h-[95vh] w-3/4 mx-auto mt-3 px-1">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};

export default Main;
