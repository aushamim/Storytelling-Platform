import { Link } from "react-router-dom";
import { useUserStore } from "../../hooks/store";

const Nav = () => {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const logout = useUserStore((state) => state.logout);
  const role = loggedInUser
    ? useUserStore.getState().getRole(loggedInUser.email)
    : "";

  return (
    <nav className="bg-blue-100 w-3/4 mx-auto px-5 py-3 rounded-b-lg flex items-center">
      <div>
        <Link to="/" className="text-3xl font-bold text-blue-800">
          SP
        </Link>
      </div>
      <div className="flex-grow flex justify-end">
        <Link
          to="/"
          className="ml-2 font-semibold hover:text-blue-500 duration-300"
        >
          Home
        </Link>
        {loggedInUser && role === "admin" ? (
          <Link
            to="/admin"
            className="ml-2 font-semibold hover:text-blue-500 duration-300"
          >
            Admin
          </Link>
        ) : (
          ""
        )}
        {loggedInUser ? (
          <>
            <button
              className="ml-2 font-semibold hover:text-blue-500 duration-300"
              onClick={logout}
            >
              Logout
            </button>
            <div>
              <span className="mx-2 font-bold text-blue-800">|</span>
              Welcome Back{" "}
              <span className="font-semibold">{loggedInUser?.name}</span>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="ml-2 font-semibold hover:text-blue-500 duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
