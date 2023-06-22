import React, { useEffect, useState } from 'react'

const Blog = () => {
  console.log('1. Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  // in useEffect hook -- first param: effect callback; second param: dependency list
  useEffect(() => {
    // runs after initital rendering
    // this is alternative to lifecycle hooks -- componentDidMount and componentDidUpdate
    // this is ideal place for your REST API calls
    // you can update state from here
    document.title = topicName;
    console.log('3. Inside useEffect');
  }, [topicName]); // second arg: dependency. it is an array and it is optional
  // if the dep is changed by any means, then useEffect callback will be called

  console.log('2. Program Ended');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={ () => {
        setTopicName('Demo of useEffect hook and useState hook');
      }}>Change Topic</button>

      <p>Published Date: {publishedDate.toString()}</p>
      <button type='button' onClick={ () => {
        setPublishedDate(new Date());
      }}>Update Published Date</button>
    </div>
  );
}

export default Blog;
