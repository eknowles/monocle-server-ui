import { IDataContext } from '../../../core/data/data.context';
import { IRecording, SourceTrackState } from '../../../types';

type Recording = IRecording & Record<'jobs' | 'tracks', string>;

const dataSelector = (data: IDataContext) => ({
  getActiveSourceTrackCards: (row: any) => {
    const recording = data.recordings.byId[row.id] as Recording;
    const job = data.jobs.byId[recording.activeJob];

    if (!job || job.name !== 'MonocleJob') {
      return [];
    }

    const sourceTrackIds = job.sources.reduce(
      (a: any, b: string) => ([...a, ...data.sources.byId[b].sourceTracks]),
      []
    );

    return sourceTrackIds.map((id: string) => ({
      ...data.sourceTracks.byId[id],
      track: data.tracks.byId[data.sourceTracks.byId[id].trackId]
    }));
  },
  getRecordingErrorState: (recording: Recording & { id: string }) => {
    const sourceTracks = dataSelector(data).getActiveSourceTrackCards(recording);
    const hasError = sourceTracks.map((t) => t.state).some((s) => s === SourceTrackState.Error);
    return hasError ? SourceTrackState.Error : SourceTrackState.Active;
  },
});

export default dataSelector;
