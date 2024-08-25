import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { stories } from "./stories";

// Stories
export const useStoriesStore = create(() => ({
  stories: stories,
}));

// Activity Tracker
export const useActivitiesStore = create(
  persist(
    (set) => ({
      activities: [],

      startActivity: (storyId) => {
        const story = useStoriesStore
          .getState()
          .stories.find((s) => s.id == storyId);
        const email = useUserStore.getState().loggedInUser?.email;

        set((state) => {
          const existingActivityIndex = state.activities.findIndex(
            (activity) =>
              activity.email == email && activity.story.id == storyId
          );

          let newActivities;
          if (existingActivityIndex !== -1) {
            newActivities = [...state.activities];
            newActivities[existingActivityIndex] = { email, story };
          } else {
            newActivities = [...state.activities, { email, story }];
          }
          return { activities: newActivities };
        });
      },

      setSelectedNarration: (storyId, part, time) => {
        const email = useUserStore.getState().loggedInUser?.email;
        set((state) => {
          const existingActivityIndex = state.activities.findIndex(
            (activity) =>
              activity.email == email && activity.story.id == storyId
          );

          let newActivities = [...state.activities];
          const story = newActivities[existingActivityIndex].story.story;
          story[part] = { ...story[part], time: time, selected: true };
          newActivities[existingActivityIndex].story.story = story;
          return { activities: newActivities };
        });
      },

      setSelectedNarrationChoice: (storyId, part, choiceId, time) => {
        const email = useUserStore.getState().loggedInUser?.email;
        set((state) => {
          const existingActivityIndex = state.activities.findIndex(
            (activity) =>
              activity.email == email && activity.story.id == storyId
          );

          let newActivities = [...state.activities];
          const choices =
            newActivities[existingActivityIndex].story.story[part].choices;

          let newChoice = choices[choiceId - 1];
          newChoice = { ...newChoice, time: time, selected: true };
          choices[choiceId - 1] = newChoice;
          newActivities[existingActivityIndex].story.story[part].choices =
            choices;

          return { activities: newActivities };
        });
      },
    }),
    { name: "activities" }
  )
);

// Users
export const useUserStore = create(
  persist(
    (set) => ({
      users: [
        {
          name: "Admin",
          email: "admin@gmail.com",
          address: "Mohammadpur, Dhaka",
          password: "aabb12345",
          role: "admin",
        },
      ],
      loggedInUser: null,

      getRole: (email) => {
        let user = {};
        set((state) => {
          user = state.users.find((x) => x.email === email);
          return { users: state.users };
        });
        return user.role;
      },

      register: (user, navigate) => {
        set((state) => {
          const existingUser = state.users.find((x) => x.email === user.email);
          if (existingUser) {
            toast.error("User already exists. Please login");
            return { users: state.users };
          } else {
            toast.success("User created successfully");
            navigate("/");
            return {
              users: [...state.users, { ...user, role: "user" }],
              loggedInUser: {
                name: user.name,
                email: user.email,
                address: user.address,
              },
            };
          }
        });
      },

      login: (user, navigate) => {
        set((state) => {
          const existingUser = state.users.find((x) => x.email === user.email);
          if (existingUser) {
            if (existingUser.password === user.password) {
              toast.success("Logged In successfully");
              navigate("/");
              return {
                loggedInUser: {
                  name: existingUser.name,
                  email: existingUser.email,
                  address: existingUser.address,
                },
              };
            } else {
              toast.error("Wrong password");
              return { loggedInUser: null };
            }
          } else {
            toast.error("User not found");
            return { loggedInUser: null };
          }
        });
      },

      logout: () => {
        toast.success("Logged out successfully");
        set({ loggedInUser: null });
      },

      promote: (email) => {
        set((state) => {
          const userIndex = state.users.findIndex(
            (user) => user.email == email
          );
          const users = [...state.users];
          users[userIndex].role = "admin";
          return { users: users };
        });
      },

      demote: (email) => {
        set((state) => {
          if (state.loggedInUser.email === email) {
            toast.error("You cannot demote yourself");
            return { users: state.users };
          }
          const userIndex = state.users.findIndex(
            (user) => user.email == email
          );
          const users = [...state.users];
          users[userIndex].role = "user";
          return { users: users };
        });
      },
    }),
    { name: "user-data" }
  )
);
