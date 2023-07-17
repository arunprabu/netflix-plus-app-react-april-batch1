import { useEffect, useState } from 'react';

const Posts = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // fetch api
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => { // if resolved (res is an obj)
        console.log(res);
        return res.json(); // json is a fn -- returns promise
      })
      .then(resInJson => {
        console.log(resInJson);
        setPostList(resInJson);
      })
      .catch((err) => { // if rejected
        console.log(err);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }, []);

  return (
    <div className="row">
      <h2>Posts | Demo of Spies</h2>

      {postList?.map((post) => {
        return (
          <div className="col-md-6" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
