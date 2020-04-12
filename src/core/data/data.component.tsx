import React from 'react';

import format from './lib/format';
import normalise from './lib/normalise';
import Context from './data.context';
import fakeData from './data.json';

const defaultValue = format(normalise(fakeData as any));

const DataComponent: React.FC = ({children}) => {
  // todo here we would use a hook with websockets like we did with d12390f115fc9007c117da93ea968728cbc367b2
  return (
    <Context.Provider value={defaultValue}>
      {children}
    </Context.Provider>
  )
};

export default DataComponent;
