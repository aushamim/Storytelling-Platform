import { Link, useParams } from "react-router-dom";
import { useActivitiesStore, useUserStore } from "../../../hooks/store";

const Activities = () => {
  const { email } = useParams();
  const user = useUserStore((state) =>
    state.users.find((x) => x.email === email)
  );
  const stories = useActivitiesStore((state) =>
    state.activities.filter((x) => x.email === email)
  );
  console.log(stories);

  return (
    <div>
      <p className="mt-10 text-4xl">
        <span className="font-semibold">{user?.name}&apos;s</span> Activities
      </p>

      <div className="grid grid-cols-4 gap-10 mt-8">
        {stories?.map((x) => (
          <Link
            key={stories.indexOf(x)}
            to={`/admin/activities/${email}/visualize/${x?.story?.id}`}
            className="text-xl font-semibold bg-blue-50 p-5 rounded-md rounded-l-none text-blue-800 duration-300 border-l-8 border-l-blue-400 hover:border-l-blue-700"
          >
            {x?.story.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activities;
