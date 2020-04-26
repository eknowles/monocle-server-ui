import React from 'react';
import Context from './data.context';
import useData from './lib/use-data';

const DataComponent: React.FC = ({ children }) => {
  const { data } = useData();

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default DataComponent;
