import { useEffect, useState } from 'react';
import format from './format';
import normalise from './normalise';

const url = 'ws://<changeme>:9854/json';

const useData = () => {
  const [data, setData] = useState({
    receivers: { byId: {}, allIds: [] },
    sourceTracks: { byId: {}, allIds: [] },
    sources: { byId: {}, allIds: [] },
    jobs: { byId: {}, allIds: [] },
    tracks: { byId: {}, allIds: [] },
    recordings: { byId: {}, allIds: [] }
  });

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = (event) => {
      socket.send(JSON.stringify({ message: 'subscribe', sequence: 999 }));
    };

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      if (parsedData.message === 'subscribe') {
        setData(format(normalise(parsedData as any)));
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return {
    data
  };
};

export default useData;
