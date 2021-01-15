import { normalize, schema } from 'normalizr';
import { IData } from '../../../types';

const receivers = new schema.Entity('receivers', {}, { idAttribute: 'token' });
const sourceTracks = new schema.Entity('sourceTracks', {}, { idAttribute: 'token' });
const sources = new schema.Entity('sources', { sourceTracks: [sourceTracks] }, { idAttribute: 'token' });
const jobs = new schema.Entity('jobs', { sources: [sources] }, { idAttribute: 'token' });
const tracks = new schema.Entity('tracks', {}, { idAttribute: 'id' });
const recordings = new schema.Entity('recordings', { jobs: [jobs], tracks: [tracks] }, { idAttribute: 'token' });
const mySchema = {
  data: {
    receivers: [receivers],
    recordings: [recordings]
  }
};

const normalise = (data: IData) => normalize<IData>(data, mySchema);

export default normalise;
