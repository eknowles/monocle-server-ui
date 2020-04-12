export namespace Monocle {
  export interface IRoot {
    message: string;
    data: IData;
  }

  export interface IData {
    receivers: IReceiver[];
    recordings: IRecording[];
  }

  export interface IReceiver {
    token: string;
    mediaUri: string;
    username: string;
    state: string;
  }

  export interface IRecording {
    token: string;
    location: string;
    name: string;
    retentionTime: number;
    activeJob: string;
    tracks: ITrack[];
    jobs: IJob[];
  }

  export interface ITrack {
    id: string;
    token: string;
    description: string;
    trackType: string;
    digitalSignature: boolean;
    encryption: boolean;
    flushFrequency: number;
    totalTrackData: ITotalTrackData[];
  }

  export interface ITotalTrackData {
    time: number;
    data: number;
  }

  export interface IJob {
    token: string;
    enabled: boolean;
    name: string;
    priority: number;
    sources: ISource[];
  }

  export interface ISource {
    token: string;
    receiverToken: string;
    sourceTracks: ISourceTrack[];
  }

  export interface ISourceTrack {
    token: string;
    trackId: string;
    state: 'Error' | 'Idle' | 'Active';
    errorMessage: string;
  }
}
