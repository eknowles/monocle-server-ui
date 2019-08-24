export namespace Monocle {
  export interface IRecordings {
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
    state: string;
    errorMessage: string;
  }

  export interface ITrack {
    id: string;
    description: string;
    trackType: string;
    digitalsignature: boolean;
    encryption: boolean;
    flushFrequency: number;
  }
}
