// AAA
import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import { mockFetch } from './mocks/mockFetch';

describe('Posts', () => {
  // 1. setting up spy
  beforeEach(() => {
    // 2. prepare to attach a spy
    // thru spy we are supplying mock res
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  });

  it('[SPYING]: renders posts properly', async () => {
    render(<Posts />);
    // AA
    const textElement = await screen.findByText('leave first ball');
    expect(textElement).toBeInTheDocument();
  });
});
