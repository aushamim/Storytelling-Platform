import { Link } from "react-router-dom";
import { useStoriesStore, useUserStore } from "../../../hooks/store";

const AdminHome = () => {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const stories = useStoriesStore((state) => state.stories);
  return (
    <div>
      <p className="mt-10 text-4xl">
        Welcome, <span className="font-semibold">{loggedInUser?.name}</span>
      </p>

      <div id="visualize-story" className="mt-10">
        <h1 className="text-3xl font-semibold">
          Click any of the following story to visualize
        </h1>
        <div className="grid grid-cols-4 gap-10 mt-8">
          {stories?.map((story) => (
            <Link
              key={story?.id}
              to={`/admin/visualize/${story?.id}`}
              className="text-xl font-semibold bg-blue-50 p-5 rounded-md rounded-l-none text-blue-800 duration-300 border-l-8 border-l-blue-400 hover:border-l-blue-700"
            >
              {story.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
