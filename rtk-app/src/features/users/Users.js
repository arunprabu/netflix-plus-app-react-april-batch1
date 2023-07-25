import { useSelector } from "react-redux";

const Users = () => {

  // subscribing to the store data in the comp
  const usersState = useSelector( (state) => { // state is the entire store data
    console.log(state);
    return state.users;
  });
  console.log(usersState);

  return (
    <div className="row">
      <h1>Users</h1>

      <div className="col-md-4">
        <h2>Add User</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="nameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phoneInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="emailInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">John</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  E-Mail: j@k.com
                </h6>
                <p className="card-text">Phone: 3245678</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Users;
