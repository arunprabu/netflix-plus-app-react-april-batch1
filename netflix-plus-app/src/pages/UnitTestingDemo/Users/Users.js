import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  // should show loader
  const [isLoading, setIsLoading] = useState(true);
  // should display success response
  const [userList, setUserList] = useState([]);
  // should display error response
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Let's hit the REST API
    // REST API URL? https://jsonplaceholder.typicode.com/users
    // Http Method? GET
    // RET API client? axios
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => { // res is obj
        console.log(res.data); // res.data is an array
        setIsLoading(false);
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }, []);

  if (isLoading) {
    return <div className="spinner-border text-success" role="status"></div>;
  }

  if (isError) {
    return <div className="alert alert-danger">Sorry! Some Error Occurred. Try again later!</div>;
  }

  return (
    <div className="row">
      <h3>Users</h3>
      {
        userList.map((user) => {
          return (
            <div className="col-md-4" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    E-Mail: {user.email}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Users;
