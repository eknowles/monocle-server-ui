const format = (input: any) => Object.keys(input.entities).reduce((acc: any, curr) => {
  const byId = input.entities[curr] as any;
  const allIds = Object.keys(byId);

  return {
    ...acc,
    [curr]: { byId, allIds }
  }
}, {});

export default format;
