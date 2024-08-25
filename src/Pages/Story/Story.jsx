import { Link, useParams } from "react-router-dom";
import {
  useActivitiesStore,
  useStoriesStore,
  useUserStore,
} from "../../hooks/store";
import { useState } from "react";
import toast from "react-hot-toast";

const Story = () => {
  const { id } = useParams();
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const startActivity = useActivitiesStore((state) => state.startActivity);
  const setSelectedNarration = useActivitiesStore(
    (state) => state.setSelectedNarration
  );
  const setSelectedNarrationChoice = useActivitiesStore(
    (state) => state.setSelectedNarrationChoice
  );
  const story = useStoriesStore((state) =>
    state.stories.find((story) => story.id == id)
  );
  const [narration, setNarration] = useState(null);
  const [time, setTime] = useState();
  const [part, setPart] = useState("");

  const convertTime = (prev) => {
    const current = new Date().getTime();
    const elapsedMilliseconds = current - prev;

    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000) % 60;
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60)) % 60;
    const elapsedHours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));

    let timeString = "";

    if (elapsedHours > 0) {
      timeString += `${elapsedHours} hours`;
    }

    if (elapsedMinutes > 0) {
      if (timeString) timeString += ", ";
      timeString += `${elapsedMinutes} minutes`;
    }

    if (elapsedSeconds > 0) {
      if (timeString) timeString += ", ";
      timeString += `${elapsedSeconds} seconds`;
    }

    setTime(current);

    return timeString || "0 seconds";
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-8">
          {story?.title}
        </h1>
      </div>

      <div className="mt-10 flex items-center justify-center">
        {narration ? (
          <div className="w-2/3 mx-auto narration-text">
            <button
              onClick={() => {
                if (narration?.next !== "" && narration?.next !== "end") {
                  setSelectedNarration(id, part, convertTime(time));
                  setNarration(story?.story[narration?.next]);
                  setPart(narration?.next);
                }
              }}
              className="bg-blue-50 p-8 pb-5 rounded-md w-full"
            >
              <p className="text-3xl">{narration?.data}</p>
              <p className="mt-5 text-end text-xs italic">
                {narration?.next !== "end" ? (
                  <>
                    {narration?.next !== ""
                      ? "Click to continue"
                      : "Choose path"}
                  </>
                ) : (
                  ""
                )}
              </p>
            </button>

            <div className="mt-5 grid grid-cols-2 items-center gap-5">
              {narration?.choices.map((choice) => (
                <button
                  key={choice?.id}
                  onClick={() => {
                    if (choice?.next != "") {
                      setSelectedNarration(id, part, convertTime(time));
                      setSelectedNarrationChoice(
                        id,
                        part,
                        choice?.id,
                        convertTime(time)
                      );
                      setNarration(story?.story[choice?.next]);
                      setPart(choice?.next);
                    }
                  }}
                  className="bg-[#f2f2f2] hover:bg-[#d2d2d2] duration-300 text-sm p-2 rounded-md h-full choice-buttons"
                >
                  {choice?.title ? (
                    <p className="text-lg font-semibold">{choice?.title}</p>
                  ) : (
                    ""
                  )}
                  {choice?.details ? (
                    <p className="text-sm border-t-2 pt-1">{choice?.details}</p>
                  ) : (
                    ""
                  )}
                </button>
              ))}
            </div>

            {narration?.next === "end" ? (
              <div className="mt-5 flex flex-col justify-center items-center">
                <p className="text-4xl mb-10 underline underline-offset-4">
                  The End
                </p>
                <Link to="/" className="btn px-10">
                  Go to home
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <button
            className="bg-blue-50 hover:bg-blue-100 duration-300 w-1/3 p-3 rounded-md font-semibold text-blue-800"
            onClick={() => {
              if (loggedInUser) {
                setNarration(story?.story["part1"]);
                setPart("part1");
                setTime(new Date().getTime());
                startActivity(id);
              } else {
                toast.error("Please Login to Continue");
              }
            }}
          >
            Click to start
          </button>
        )}
      </div>
    </div>
  );
};

export default Story;
