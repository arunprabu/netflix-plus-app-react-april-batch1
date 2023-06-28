import { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <div>
      <h2>ContactUsPage</h2>
      <h3>useContext() Hook Demo</h3>
      <p>{userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </div>
  );
}

export default ContactUsPage;
