const mockPostList = [
  {
    id: 1,
    title: 'leave first ball',
    body: 'random stuff....'
  },
  {
    id: 2,
    title: 'play to lose the match',
    body: 'some stuff'
  }
];

export const mockFetch = async () => {
  const mockRes = {
    json: async () => {
      return mockPostList;
    }
  };
  return mockRes;
};
