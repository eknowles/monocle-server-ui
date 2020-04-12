import React from 'react';
import { IJob, IReceiver, IRecording, ISource, ISourceTrack, ITrack } from '../../types';

interface IDataEntity<T> {
  byId: {
    [id: string]: T;
  };
  allIds: string[];
}

export interface IDataContext {
  recordings: IDataEntity<IRecording & Record<'jobs' | 'tracks', string>>;
  receivers: IDataEntity<IReceiver>;
  sourceTracks: IDataEntity<ISourceTrack>;
  sources: IDataEntity<ISource & { sourceTracks: string[] }>;
  jobs: IDataEntity<IJob & { sources: string[]; }>;
  tracks: IDataEntity<ITrack>;
}

const defaultEntity = {
  byId: {},
  allIds: [],
};

const defaultValue = ['receivers', 'sourceTracks', 'sources', 'jobs', 'tracks', 'recordings']
  .reduce((acc, key) => ({
    ...acc,
    [key]: defaultEntity,
  }), {} as IDataContext);

const DataContext = React.createContext<IDataContext>(defaultValue);

export default DataContext;
