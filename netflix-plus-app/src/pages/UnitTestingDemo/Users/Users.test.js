// AAA
import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';

// setting up mock for axios
// mocking a module with automocked version when needed
jest.mock('axios');

describe('Users', () => {
  /* The following is NOT RECOMMENED -- This is known as anti-pattern */
  /* it('fetches userList via REST API call', async () => {
    render(<Users />);
    /// =======
    const nameElement = await screen.findByText('Leanne Graham');
    expect(nameElement).toBeInTheDocument();
  }); */

  /* 3 Disadvantages / Challenges in testing the api calls with the above approach
    1. Time Consuming
    2. Data Inconsistency (no guarantee for the sample data like Leanne Graham to be available)
    3. Availability of REST API (may be down or still in dev)
  */

  // So, the solution for the above problem is: Mocking REST API Data
  // The above spec must be removed. Only then the following test can be tested properly
  // POSITIVE SPEC -- MUST
  it('[MOCKING]: fetches userList via REST API call', async () => {
    // 1. prepare the mock data for the comp
    const mockResponse = {
      data: [
        {
          id: 1,
          name: 'John',
          email: 'j@k.com'
        },
        {
          id: 2,
          name: 'Steve',
          email: 's@t.com'
        }
      ]
    };
    // 2. Resolve the http req with the above mock data as successful resp
    // 2.1 setup mock for axios (see before describe block)
    // 2.2 resolve the req with mock data
    axios.get.mockResolvedValue(mockResponse);
    // 3. render the comp
    render(<Users />);
    // 4. assert
    const nameElement = await screen.findByText('John');
    expect(nameElement).toBeInTheDocument();
  });

  // NEGATIVE SPEC -- MUST
  it('[MOCKING]: renders error properly after REST API call', async () => {
    // 1. prepare the mock error for the comp
    const error = {
      msg: 'some error occurred'
    };
    // 2. Reject the http req with the above mock error as negative resp
    // 2.1 setup mock for axios (see before describe block)
    // 2.2 reject the req with mock error
    axios.get.mockRejectedValue(error);
    // 3. render the comp
    render(<Users />);
    // 4. assert
    const errorElement = await screen.findByText('Sorry! Some Error Occurred. Try again later!');
    expect(errorElement).toBeInTheDocument();
  });
});

// // static
// screen.getByRole('button');
// screen.getAllByRole('button');

// // dynamic element
// screen.findByText()
// screen.findAllByText()
