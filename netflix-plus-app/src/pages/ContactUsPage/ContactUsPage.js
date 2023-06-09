import { useContext, useState } from 'react';
import { PageContext } from '../../contexts/PageContext';
import axios from 'axios';

const ContactUsPage = () => {
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    query: '',
    isSubmitting: false,
    isSaved: false,
    isError: false
  });

  /* steps
    1. read the form data on submit button click
      1.1 stop the page refresh [DONE]
      1.2 read the form data [DONE]
    2. send the form data to the rest api
      2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
      2.2 What's the Http Method? POST
      2.3 What's the REST API Client? axios or fetch
      2.4 What's the form data? formState
    3. display the form submission status
  */

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the page refresh
    console.log(formState);

    setFormState({
      ...formState,
      isSubmitting: true,
      isSaved: false,
      isError: false
    });

    axios
      .post('https://jsonplaceholder.typicode.com/users', formState)
      .then((res) => {
        console.log(res);
        setFormState({
          ...formState,
          isSubmitting: false,
          isSaved: true,
          isError: false
        });
      })
      .catch((err) => {
        console.log(err);
        setFormState({
          ...formState,
          isSubmitting: false,
          isSaved: false,
          isError: true
        });
      })
      .finally(() => {
        console.log('It is over!');
      });
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h2>ContactUsPage</h2>
      <h3>useContext() Hook Demo</h3>
      <p>{userStatus?.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus?.lastLogin}</p>

      <h3>Contact Us Form</h3>
      <form className="col-md-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneInput"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="queryInput" className="form-label">
            Query
          </label>
          <textarea
            className="form-control"
            id="queryInput"
            name="query"
            value={formState.query}
            onChange={handleChange}
          />
        </div>
        {formState.isSaved && <div className="alert alert-success">Saved Successfully!</div>}
        {formState.isError && (
          <div className="alert alert-danger">Sorry! Some error occurred. Try again later!</div>
        )}
        <button type="submit" className="btn btn-primary"
          disabled={formState.isSubmitting || formState.fullName === '' }>
          {formState.isSubmitting ? 'Submitting.... Please wait' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;
