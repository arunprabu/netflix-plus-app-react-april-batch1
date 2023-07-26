import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./usersSlice";
import AddUser from './AddUser/AddUser';

const Users = () => {
  // subscribing to the store data in the comp
  const usersState = useSelector((state) => {
    // state is the entire store data
    console.log(state);
    return state.users;
  });
  console.log(usersState);

  const dispatch = useDispatch();

  useEffect(() => {
    // after initial rendering -- this will be called
    dispatch(fetchUsersAsync());
  }, []);

  if (usersState.isLoading) {
    return <div className="spinner-border"></div>;
  }

  if (usersState.isError) {
    return <div className="alert alert-danger">{usersState.status}</div>;
  }

  return (
    <div className="row">
      <h1>Users</h1>

      <div className="col-md-4">
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        <div className="row">
          {usersState.users.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      E-Mail: {user.email}
                    </h6>
                    <p className="card-text">Phone: {user.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
