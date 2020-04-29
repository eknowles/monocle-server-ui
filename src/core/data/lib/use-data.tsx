import { useEffect, useState } from 'react';
import format from './format';
import normalise from './normalise';

const url = 'ws://' + window.location.hostname + ':' + 9854 + '/json';

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
      console.log(event.data);
      const parsedData = JSON.parse(event.data);
      console.log(parsedData);
      if (parsedData.message === 'fileAdded') {
        //TODO
      }
      else if (parsedData.message === 'fileRemoved') {
        //TODO
      }
      else if (parsedData.message === 'filestateMounted') {
        //TODO
      }
      else if (parsedData.message === 'filestateMounting') {
        //TODO
      }
      else if (parsedData.message === 'filestateUnmounted') {
        //TODO
      }
      else if (parsedData.message === 'filestateMounting') {
        //TODO
      }
      else if (parsedData.message === 'groupAdded') {
        //TODO
      }
      else if (parsedData.message === 'groupChanged') {
        //TODO
      }
      else if (parsedData.message === 'groupRemoved') {
        //TODO
      }
      else if (parsedData.message === 'locationChanged') {
        //TODO
      }
      else if (parsedData.message === 'mapAdded') {
        //TODO
      }
      else if (parsedData.message === 'mapChanged') {
        //TODO
      }
      else if (parsedData.message === 'mapRemoved') {
        //TODO
      }
      else if (parsedData.message === 'mountChanged') {
        //TODO
      }
      else if (parsedData.message === 'mountRemoved') {
        //TODO
      }
      else if (parsedData.message === 'nameChanged') {
        //TODO
      }
      else if (parsedData.message === 'onvifUserAdded') {
        //TODO
      }
      else if (parsedData.message === 'onvifUserChanged') {
        //TODO
      }
      else if (parsedData.message === 'onvifUserRemoved') {
        //TODO
      }
      else if (parsedData.message === 'receiverAdded') {
        //TODO
      }
      else if (parsedData.message === 'receiverChanged') {
        //TODO
      }
      else if (parsedData.message === 'receiverRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingActiveJob') {
        //TODO
      }
      else if (parsedData.message === 'recordingAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingChanged') {
        //TODO
      }
      else if (parsedData.message === 'recordingRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobChanged') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceTrackActiveParameters') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceTrackStateChanged') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceTrackAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceTrackLogMessage') {
        //TODO
      }
      else if (parsedData.message === 'recordingJobSourceTrackRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingLogMessage') {
        //TODO
      }
      else if (parsedData.message === 'recordingStatistics') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackChanged') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackSetData') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackDeleteData') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackCodecAdded') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackCodecRemoved') {
        //TODO
      }
      else if (parsedData.message === 'recordingTrackLogMessage') {
        //TODO
      }
      else if (parsedData.message === 'serverLogMessage') {
        //TODO
      }
      else if (parsedData.message === 'subscribe') {
        setData(format(normalise(parsedData as any)));
      }
      else if (parsedData.message === 'userAdded') {
        //TODO
      }
      else if (parsedData.message === 'userChanged') {
        //TODO
      }
      else if (parsedData.message === 'userRemoved') {
        //TODO
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
