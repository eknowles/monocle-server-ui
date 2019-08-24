import { useEffect, useState } from 'react';
import { Monocle } from '../../types';

const useRecordings = (url: string) => {
  const [recordings, setRecordings] = useState<Monocle.IRecordings['recordings']>([]);

  useEffect(() => {
    const socket = new WebSocket(`${url}/recordings`);

    socket.onmessage = ({ data }) => {
      const socketData = JSON.parse(data) as Monocle.IRecordings;
      setRecordings(socketData.recordings);
    };

    return () => {
      socket.close();
    }
  }, [url]);

  return {
    recordings
  }
};

export default useRecordings;
