import { useEffect, useState } from 'react';

const useRecordings = (url: string) => {
  const [recordingIds, setRecordingIds] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket(`${url}/recordings`);

    socket.onmessage = ({ data }) => {
      const { recordingsAdded } = JSON.parse(data);
      if (recordingsAdded && recordingsAdded.length) {
        setRecordingIds((currentIds) => [...currentIds, ...recordingsAdded]);
      }
    };

    return () => {
      socket.close();
    }
  }, [url]);

  return {
    recordingIds
  }
};

export default useRecordings;
