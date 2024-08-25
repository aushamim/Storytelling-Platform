import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import AdminNav from "../Components/Nav/AdminNav";
import { useUserStore } from "../hooks/store";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const role = loggedInUser
    ? useUserStore.getState().getRole(loggedInUser.email)
    : "";
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser || role !== "admin") {
      navigate("error");
    }
  }, []);
  return (
    <>
      <Nav />
      <AdminNav />
      <Toaster />

      {/* All Pages */}
      <div className="min-h-[95vh] w-3/4 mx-auto mt-3 px-1">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};

export default AdminLayout;
