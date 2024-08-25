import { Link } from "react-router-dom";
import { useStoriesStore } from "../../hooks/store";

const Home = () => {
  const stories = useStoriesStore((state) => state.stories);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold">Start your adventure</h1>
      <div className="grid grid-cols-4 gap-10 mt-8">
        {stories?.map((story) => (
          <Link
            key={story?.id}
            to={`/story/${story?.id}`}
            className="text-xl font-semibold bg-blue-50 p-5 rounded-md rounded-l-none text-blue-800 duration-300 border-l-8 border-l-blue-400 hover:border-l-blue-700"
          >
            {story.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
