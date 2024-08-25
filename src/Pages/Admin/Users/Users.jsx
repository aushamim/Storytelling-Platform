import { Link } from "react-router-dom";
import { useUserStore } from "../../../hooks/store";

const Users = () => {
  const users = useUserStore((state) => state.users);
  const promote = useUserStore((state) => state.promote);
  const demote = useUserStore((state) => state.demote);
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-8">All Users</h1>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Activities</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={users?.indexOf(user)} className="hover">
                <th>{users?.indexOf(user) + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.address}</td>
                <td>
                  <Link
                    to={`/admin/activities/${user?.email}`}
                    className="btn btn-sm"
                  >
                    Check Activities
                  </Link>
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <div className="badge badge-primary badge-outline">
                      admin
                    </div>
                  ) : (
                    <div className="badge badge-accent badge-outline">user</div>
                  )}
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => {
                        demote(user?.email);
                      }}
                    >
                      Demote
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-success text-white"
                      onClick={() => {
                        promote(user?.email);
                      }}
                    >
                      Promote
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
