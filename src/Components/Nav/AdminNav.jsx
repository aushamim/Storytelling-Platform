import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="bg-blue-100 w-3/4 mx-auto px-5 py-3 mt-2 rounded-lg flex justify-end">
      <Link
        to="/admin"
        className="ml-2 font-semibold hover:text-blue-500 duration-300"
      >
        Dashboard |
      </Link>
      <a
        href="/admin#visualize-story"
        className="ml-2 font-semibold hover:text-blue-500 duration-300"
      >
        Visualize Story |
      </a>
      <Link
        to="/admin/users"
        className="ml-2 font-semibold hover:text-blue-500 duration-300"
      >
        Users |
      </Link>
      <Link
        to="/admin/users"
        className="ml-2 font-semibold hover:text-blue-500 duration-300"
      >
        Activities
      </Link>
    </nav>
  );
};

export default AdminNav;
