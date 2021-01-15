// package: proto
// file: monocle.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class File extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getMountpoint(): string;
  setMountpoint(value: string): void;

  getNumchunks(): number;
  setNumchunks(value: number): void;

  getChunksize(): number;
  setChunksize(value: number): void;

  getAutomount(): boolean;
  setAutomount(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    token: number,
    path: string,
    mountpoint: string,
    numchunks: number,
    chunksize: number,
    automount: boolean,
  }
}

export class Group extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getName(): string;
  setName(value: string): void;

  getManageusers(): boolean;
  setManageusers(value: boolean): void;

  getManagerecordings(): boolean;
  setManagerecordings(value: boolean): void;

  getManagemaps(): boolean;
  setManagemaps(value: boolean): void;

  getManagedevice(): boolean;
  setManagedevice(value: boolean): void;

  getManageplugins(): boolean;
  setManageplugins(value: boolean): void;

  getReboot(): boolean;
  setReboot(value: boolean): void;

  getAllrecordings(): boolean;
  setAllrecordings(value: boolean): void;

  clearRecordingsList(): void;
  getRecordingsList(): Array<number>;
  setRecordingsList(value: Array<number>): void;
  addRecordings(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    token: number,
    name: string,
    manageusers: boolean,
    managerecordings: boolean,
    managemaps: boolean,
    managedevice: boolean,
    manageplugins: boolean,
    reboot: boolean,
    allrecordings: boolean,
    recordingsList: Array<number>,
  }
}

export class Index extends jspb.Message {
  getStarttime(): number;
  setStarttime(value: number): void;

  getEndtime(): number;
  setEndtime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    starttime: number,
    endtime: number,
  }
}

export class LogMessage extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getSeverity(): SeverityMap[keyof SeverityMap];
  setSeverity(value: SeverityMap[keyof SeverityMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LogMessage): LogMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogMessage;
  static deserializeBinaryFromReader(message: LogMessage, reader: jspb.BinaryReader): LogMessage;
}

export namespace LogMessage {
  export type AsObject = {
    time: number,
    severity: SeverityMap[keyof SeverityMap],
    message: string,
  }
}

export class Map extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getMd5(): string;
  setMd5(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    token: number,
    name: string,
    location: string,
    md5: string,
  }
}

export class Mount extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getParentid(): number;
  setParentid(value: number): void;

  getMajorstdev(): number;
  setMajorstdev(value: number): void;

  getMinorstdev(): number;
  setMinorstdev(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mount.AsObject;
  static toObject(includeInstance: boolean, msg: Mount): Mount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mount;
  static deserializeBinaryFromReader(message: Mount, reader: jspb.BinaryReader): Mount;
}

export namespace Mount {
  export type AsObject = {
    id: number,
    parentid: number,
    majorstdev: number,
    minorstdev: number,
    path: string,
    type: string,
    source: string,
  }
}

export class ONVIFUser extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getOnvifuserlevel(): ONVIFUserLevelMap[keyof ONVIFUserLevelMap];
  setOnvifuserlevel(value: ONVIFUserLevelMap[keyof ONVIFUserLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ONVIFUser.AsObject;
  static toObject(includeInstance: boolean, msg: ONVIFUser): ONVIFUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ONVIFUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ONVIFUser;
  static deserializeBinaryFromReader(message: ONVIFUser, reader: jspb.BinaryReader): ONVIFUser;
}

export namespace ONVIFUser {
  export type AsObject = {
    token: number,
    username: string,
    onvifuserlevel: ONVIFUserLevelMap[keyof ONVIFUserLevelMap],
  }
}

export class Plugin extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getParameters(): string;
  setParameters(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getState(): PluginStateMap[keyof PluginStateMap];
  setState(value: PluginStateMap[keyof PluginStateMap]): void;

  getStatemessage(): string;
  setStatemessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plugin.AsObject;
  static toObject(includeInstance: boolean, msg: Plugin): Plugin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plugin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plugin;
  static deserializeBinaryFromReader(message: Plugin, reader: jspb.BinaryReader): Plugin;
}

export namespace Plugin {
  export type AsObject = {
    token: number,
    name: string,
    enabled: boolean,
    parameters: string,
    priority: number,
    state: PluginStateMap[keyof PluginStateMap],
    statemessage: string,
  }
}

export class Receiver extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getMode(): ReceiverModeMap[keyof ReceiverModeMap];
  setMode(value: ReceiverModeMap[keyof ReceiverModeMap]): void;

  getUri(): string;
  setUri(value: string): void;

  getAutocreated(): boolean;
  setAutocreated(value: boolean): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  clearParametersList(): void;
  getParametersList(): Array<string>;
  setParametersList(value: Array<string>): void;
  addParameters(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receiver.AsObject;
  static toObject(includeInstance: boolean, msg: Receiver): Receiver.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Receiver, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receiver;
  static deserializeBinaryFromReader(message: Receiver, reader: jspb.BinaryReader): Receiver;
}

export namespace Receiver {
  export type AsObject = {
    token: number,
    mode: ReceiverModeMap[keyof ReceiverModeMap],
    uri: string,
    autocreated: boolean,
    username: string,
    password: string,
    parametersList: Array<string>,
  }
}

export class Recording extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getSourceid(): string;
  setSourceid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getRetentiontime(): number;
  setRetentiontime(value: number): void;

  getAdaptivestreaming(): boolean;
  setAdaptivestreaming(value: boolean): void;

  getRelativelocation(): boolean;
  setRelativelocation(value: boolean): void;

  getOrientation(): number;
  setOrientation(value: number): void;

  clearJobsList(): void;
  getJobsList(): Array<RecordingJob>;
  setJobsList(value: Array<RecordingJob>): void;
  addJobs(value?: RecordingJob, index?: number): RecordingJob;

  clearTracksList(): void;
  getTracksList(): Array<RecordingTrack>;
  setTracksList(value: Array<RecordingTrack>): void;
  addTracks(value?: RecordingTrack, index?: number): RecordingTrack;

  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasActivejob(): boolean;
  clearActivejob(): void;
  getActivejob(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setActivejob(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recording.AsObject;
  static toObject(includeInstance: boolean, msg: Recording): Recording.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Recording, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recording;
  static deserializeBinaryFromReader(message: Recording, reader: jspb.BinaryReader): Recording;
}

export namespace Recording {
  export type AsObject = {
    token: number,
    sourceid: string,
    name: string,
    location: string,
    description: string,
    address: string,
    content: string,
    retentiontime: number,
    adaptivestreaming: boolean,
    relativelocation: boolean,
    orientation: number,
    jobsList: Array<RecordingJob.AsObject>,
    tracksList: Array<RecordingTrack.AsObject>,
    latitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    longitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    activejob?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class RecordingJob extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

  clearRecordingjobsourcesList(): void;
  getRecordingjobsourcesList(): Array<RecordingJobSource>;
  setRecordingjobsourcesList(value: Array<RecordingJobSource>): void;
  addRecordingjobsources(value?: RecordingJobSource, index?: number): RecordingJobSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJob.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJob): RecordingJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJob;
  static deserializeBinaryFromReader(message: RecordingJob, reader: jspb.BinaryReader): RecordingJob;
}

export namespace RecordingJob {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    name: string,
    enabled: boolean,
    priority: number,
    recordingjobsourcesList: Array<RecordingJobSource.AsObject>,
  }
}

export class RecordingJobSource extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  getReceivertoken(): number;
  setReceivertoken(value: number): void;

  clearRecordingjobsourcetracksList(): void;
  getRecordingjobsourcetracksList(): Array<RecordingJobSourceTrack>;
  setRecordingjobsourcetracksList(value: Array<RecordingJobSourceTrack>): void;
  addRecordingjobsourcetracks(value?: RecordingJobSourceTrack, index?: number): RecordingJobSourceTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSource.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSource): RecordingJobSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSource;
  static deserializeBinaryFromReader(message: RecordingJobSource, reader: jspb.BinaryReader): RecordingJobSource;
}

export namespace RecordingJobSource {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
    receivertoken: number,
    recordingjobsourcetracksList: Array<RecordingJobSourceTrack.AsObject>,
  }
}

export class RecordingJobSourceTrack extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  getRecordingjobsourcetracktoken(): number;
  setRecordingjobsourcetracktoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  clearParametersList(): void;
  getParametersList(): Array<string>;
  setParametersList(value: Array<string>): void;
  addParameters(value: string, index?: number): string;

  getState(): RecordingJobStateMap[keyof RecordingJobStateMap];
  setState(value: RecordingJobStateMap[keyof RecordingJobStateMap]): void;

  getError(): string;
  setError(value: string): void;

  clearActiveparametersList(): void;
  getActiveparametersList(): Array<string>;
  setActiveparametersList(value: Array<string>): void;
  addActiveparameters(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceTrack.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceTrack): RecordingJobSourceTrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceTrack;
  static deserializeBinaryFromReader(message: RecordingJobSourceTrack, reader: jspb.BinaryReader): RecordingJobSourceTrack;
}

export namespace RecordingJobSourceTrack {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
    recordingjobsourcetracktoken: number,
    recordingtrackid: number,
    parametersList: Array<string>,
    state: RecordingJobStateMap[keyof RecordingJobStateMap],
    error: string,
    activeparametersList: Array<string>,
  }
}

export class RecordingTrack extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  getTracktype(): TrackTypeMap[keyof TrackTypeMap];
  setTracktype(value: TrackTypeMap[keyof TrackTypeMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFixedfiles(): boolean;
  setFixedfiles(value: boolean): void;

  getDigitalsigning(): boolean;
  setDigitalsigning(value: boolean): void;

  getEncrypt(): boolean;
  setEncrypt(value: boolean): void;

  getFlushfrequency(): number;
  setFlushfrequency(value: number): void;

  clearFilesList(): void;
  getFilesList(): Array<number>;
  setFilesList(value: Array<number>): void;
  addFiles(value: number, index?: number): number;

  clearTotaltrackdataList(): void;
  getTotaltrackdataList(): Array<TrackData>;
  setTotaltrackdataList(value: Array<TrackData>): void;
  addTotaltrackdata(value?: TrackData, index?: number): TrackData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrack.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrack): RecordingTrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrack;
  static deserializeBinaryFromReader(message: RecordingTrack, reader: jspb.BinaryReader): RecordingTrack;
}

export namespace RecordingTrack {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
    token: string,
    tracktype: TrackTypeMap[keyof TrackTypeMap],
    description: string,
    fixedfiles: boolean,
    digitalsigning: boolean,
    encrypt: boolean,
    flushfrequency: number,
    filesList: Array<number>,
    totaltrackdataList: Array<TrackData.AsObject>,
  }
}

export class TrackData extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getTotaldata(): number;
  setTotaldata(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackData.AsObject;
  static toObject(includeInstance: boolean, msg: TrackData): TrackData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackData;
  static deserializeBinaryFromReader(message: TrackData, reader: jspb.BinaryReader): TrackData;
}

export namespace TrackData {
  export type AsObject = {
    time: number,
    totaldata: number,
  }
}

export class User extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getGrouptoken(): number;
  setGrouptoken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    token: number,
    username: string,
    grouptoken: number,
  }
}

export class Version extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getBuild(): number;
  setBuild(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major: number,
    minor: number,
    build: number,
  }
}

export class State extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  getArchitecture(): string;
  setArchitecture(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): Version | undefined;
  setVersion(value?: Version): void;

  getIdentifier(): number;
  setIdentifier(value: number): void;

  clearEnvironmentvariablesList(): void;
  getEnvironmentvariablesList(): Array<string>;
  setEnvironmentvariablesList(value: Array<string>): void;
  addEnvironmentvariables(value: string, index?: number): string;

  clearCommandlinevariablesList(): void;
  getCommandlinevariablesList(): Array<string>;
  setCommandlinevariablesList(value: Array<string>): void;
  addCommandlinevariables(value: string, index?: number): string;

  clearOnvifusersList(): void;
  getOnvifusersList(): Array<ONVIFUser>;
  setOnvifusersList(value: Array<ONVIFUser>): void;
  addOnvifusers(value?: ONVIFUser, index?: number): ONVIFUser;

  clearGroupsList(): void;
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): void;
  addGroups(value?: Group, index?: number): Group;

  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  clearFilesList(): void;
  getFilesList(): Array<File>;
  setFilesList(value: Array<File>): void;
  addFiles(value?: File, index?: number): File;

  clearReceiversList(): void;
  getReceiversList(): Array<Receiver>;
  setReceiversList(value: Array<Receiver>): void;
  addReceivers(value?: Receiver, index?: number): Receiver;

  clearRecordingsList(): void;
  getRecordingsList(): Array<Recording>;
  setRecordingsList(value: Array<Recording>): void;
  addRecordings(value?: Recording, index?: number): Recording;

  clearServerlogmessagesList(): void;
  getServerlogmessagesList(): Array<LogMessage>;
  setServerlogmessagesList(value: Array<LogMessage>): void;
  addServerlogmessages(value?: LogMessage, index?: number): LogMessage;

  clearMapsList(): void;
  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): void;
  addMaps(value?: Map, index?: number): Map;

  clearMountsList(): void;
  getMountsList(): Array<Mount>;
  setMountsList(value: Array<Mount>): void;
  addMounts(value?: Mount, index?: number): Mount;

  getLocationtime(): number;
  setLocationtime(value: number): void;

  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  clearLocationindicesList(): void;
  getLocationindicesList(): Array<Index>;
  setLocationindicesList(value: Array<Index>): void;
  addLocationindices(value?: Index, index?: number): Index;

  getGpsdevice(): string;
  setGpsdevice(value: string): void;

  getGpsdevicestate(): GPSDeviceStateMap[keyof GPSDeviceStateMap];
  setGpsdevicestate(value: GPSDeviceStateMap[keyof GPSDeviceStateMap]): void;

  getGpsdevicestatemessage(): string;
  setGpsdevicestatemessage(value: string): void;

  getLocationretentiontime(): number;
  setLocationretentiontime(value: number): void;

  clearOpenstreetmapbaseurisList(): void;
  getOpenstreetmapbaseurisList(): Array<string>;
  setOpenstreetmapbaseurisList(value: Array<string>): void;
  addOpenstreetmapbaseuris(value: string, index?: number): string;

  clearPluginsList(): void;
  getPluginsList(): Array<Plugin>;
  setPluginsList(value: Array<Plugin>): void;
  addPlugins(value?: Plugin, index?: number): Plugin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    name: string,
    publickey: string,
    architecture: string,
    version?: Version.AsObject,
    identifier: number,
    environmentvariablesList: Array<string>,
    commandlinevariablesList: Array<string>,
    onvifusersList: Array<ONVIFUser.AsObject>,
    groupsList: Array<Group.AsObject>,
    usersList: Array<User.AsObject>,
    filesList: Array<File.AsObject>,
    receiversList: Array<Receiver.AsObject>,
    recordingsList: Array<Recording.AsObject>,
    serverlogmessagesList: Array<LogMessage.AsObject>,
    mapsList: Array<Map.AsObject>,
    mountsList: Array<Mount.AsObject>,
    locationtime: number,
    latitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    longitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    locationindicesList: Array<Index.AsObject>,
    gpsdevice: string,
    gpsdevicestate: GPSDeviceStateMap[keyof GPSDeviceStateMap],
    gpsdevicestatemessage: string,
    locationretentiontime: number,
    openstreetmapbaseurisList: Array<string>,
    pluginsList: Array<Plugin.AsObject>,
  }
}

export class FileAdded extends jspb.Message {
  hasFile(): boolean;
  clearFile(): void;
  getFile(): File | undefined;
  setFile(value?: File): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileAdded.AsObject;
  static toObject(includeInstance: boolean, msg: FileAdded): FileAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileAdded;
  static deserializeBinaryFromReader(message: FileAdded, reader: jspb.BinaryReader): FileAdded;
}

export namespace FileAdded {
  export type AsObject = {
    file?: File.AsObject,
  }
}

export class FileRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: FileRemoved): FileRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileRemoved;
  static deserializeBinaryFromReader(message: FileRemoved, reader: jspb.BinaryReader): FileRemoved;
}

export namespace FileRemoved {
  export type AsObject = {
    token: number,
  }
}

export class FileMonitorStateChanged extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getState(): FileMonitorStateMap[keyof FileMonitorStateMap];
  setState(value: FileMonitorStateMap[keyof FileMonitorStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMonitorStateChanged.AsObject;
  static toObject(includeInstance: boolean, msg: FileMonitorStateChanged): FileMonitorStateChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMonitorStateChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMonitorStateChanged;
  static deserializeBinaryFromReader(message: FileMonitorStateChanged, reader: jspb.BinaryReader): FileMonitorStateChanged;
}

export namespace FileMonitorStateChanged {
  export type AsObject = {
    token: number,
    state: FileMonitorStateMap[keyof FileMonitorStateMap],
  }
}

export class FileStateChanged extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getState(): FileStateMap[keyof FileStateMap];
  setState(value: FileStateMap[keyof FileStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileStateChanged.AsObject;
  static toObject(includeInstance: boolean, msg: FileStateChanged): FileStateChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileStateChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileStateChanged;
  static deserializeBinaryFromReader(message: FileStateChanged, reader: jspb.BinaryReader): FileStateChanged;
}

export namespace FileStateChanged {
  export type AsObject = {
    token: number,
    state: FileStateMap[keyof FileStateMap],
  }
}

export class GPSDeviceChanged extends jspb.Message {
  getGpsdevice(): string;
  setGpsdevice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPSDeviceChanged.AsObject;
  static toObject(includeInstance: boolean, msg: GPSDeviceChanged): GPSDeviceChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GPSDeviceChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPSDeviceChanged;
  static deserializeBinaryFromReader(message: GPSDeviceChanged, reader: jspb.BinaryReader): GPSDeviceChanged;
}

export namespace GPSDeviceChanged {
  export type AsObject = {
    gpsdevice: string,
  }
}

export class GPSDeviceStateChanged extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getState(): GPSDeviceStateMap[keyof GPSDeviceStateMap];
  setState(value: GPSDeviceStateMap[keyof GPSDeviceStateMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPSDeviceStateChanged.AsObject;
  static toObject(includeInstance: boolean, msg: GPSDeviceStateChanged): GPSDeviceStateChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GPSDeviceStateChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPSDeviceStateChanged;
  static deserializeBinaryFromReader(message: GPSDeviceStateChanged, reader: jspb.BinaryReader): GPSDeviceStateChanged;
}

export namespace GPSDeviceStateChanged {
  export type AsObject = {
    time: number,
    state: GPSDeviceStateMap[keyof GPSDeviceStateMap],
    message: string,
  }
}

export class GroupAdded extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupAdded.AsObject;
  static toObject(includeInstance: boolean, msg: GroupAdded): GroupAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupAdded;
  static deserializeBinaryFromReader(message: GroupAdded, reader: jspb.BinaryReader): GroupAdded;
}

export namespace GroupAdded {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class GroupChanged extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupChanged.AsObject;
  static toObject(includeInstance: boolean, msg: GroupChanged): GroupChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupChanged;
  static deserializeBinaryFromReader(message: GroupChanged, reader: jspb.BinaryReader): GroupChanged;
}

export namespace GroupChanged {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class GroupRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: GroupRemoved): GroupRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupRemoved;
  static deserializeBinaryFromReader(message: GroupRemoved, reader: jspb.BinaryReader): GroupRemoved;
}

export namespace GroupRemoved {
  export type AsObject = {
    token: number,
  }
}

export class LocationChanged extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLatitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLongitude(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationChanged.AsObject;
  static toObject(includeInstance: boolean, msg: LocationChanged): LocationChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationChanged;
  static deserializeBinaryFromReader(message: LocationChanged, reader: jspb.BinaryReader): LocationChanged;
}

export namespace LocationChanged {
  export type AsObject = {
    time: number,
    latitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    longitude?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class LocationRetentionTimeChanged extends jspb.Message {
  getLocationretentiontime(): number;
  setLocationretentiontime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationRetentionTimeChanged.AsObject;
  static toObject(includeInstance: boolean, msg: LocationRetentionTimeChanged): LocationRetentionTimeChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationRetentionTimeChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationRetentionTimeChanged;
  static deserializeBinaryFromReader(message: LocationRetentionTimeChanged, reader: jspb.BinaryReader): LocationRetentionTimeChanged;
}

export namespace LocationRetentionTimeChanged {
  export type AsObject = {
    locationretentiontime: number,
  }
}

export class MapAdded extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): Map | undefined;
  setMap(value?: Map): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapAdded.AsObject;
  static toObject(includeInstance: boolean, msg: MapAdded): MapAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapAdded;
  static deserializeBinaryFromReader(message: MapAdded, reader: jspb.BinaryReader): MapAdded;
}

export namespace MapAdded {
  export type AsObject = {
    map?: Map.AsObject,
  }
}

export class MapChanged extends jspb.Message {
  hasMap(): boolean;
  clearMap(): void;
  getMap(): Map | undefined;
  setMap(value?: Map): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapChanged.AsObject;
  static toObject(includeInstance: boolean, msg: MapChanged): MapChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapChanged;
  static deserializeBinaryFromReader(message: MapChanged, reader: jspb.BinaryReader): MapChanged;
}

export namespace MapChanged {
  export type AsObject = {
    map?: Map.AsObject,
  }
}

export class MapRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: MapRemoved): MapRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRemoved;
  static deserializeBinaryFromReader(message: MapRemoved, reader: jspb.BinaryReader): MapRemoved;
}

export namespace MapRemoved {
  export type AsObject = {
    token: number,
  }
}

export class MountAdded extends jspb.Message {
  hasMount(): boolean;
  clearMount(): void;
  getMount(): Mount | undefined;
  setMount(value?: Mount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MountAdded.AsObject;
  static toObject(includeInstance: boolean, msg: MountAdded): MountAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MountAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MountAdded;
  static deserializeBinaryFromReader(message: MountAdded, reader: jspb.BinaryReader): MountAdded;
}

export namespace MountAdded {
  export type AsObject = {
    mount?: Mount.AsObject,
  }
}

export class MountRemoved extends jspb.Message {
  hasMount(): boolean;
  clearMount(): void;
  getMount(): Mount | undefined;
  setMount(value?: Mount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MountRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: MountRemoved): MountRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MountRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MountRemoved;
  static deserializeBinaryFromReader(message: MountRemoved, reader: jspb.BinaryReader): MountRemoved;
}

export namespace MountRemoved {
  export type AsObject = {
    mount?: Mount.AsObject,
  }
}

export class NameChanged extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameChanged.AsObject;
  static toObject(includeInstance: boolean, msg: NameChanged): NameChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameChanged;
  static deserializeBinaryFromReader(message: NameChanged, reader: jspb.BinaryReader): NameChanged;
}

export namespace NameChanged {
  export type AsObject = {
    name: string,
  }
}

export class ONVIFUserAdded extends jspb.Message {
  hasOnvifuser(): boolean;
  clearOnvifuser(): void;
  getOnvifuser(): ONVIFUser | undefined;
  setOnvifuser(value?: ONVIFUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ONVIFUserAdded.AsObject;
  static toObject(includeInstance: boolean, msg: ONVIFUserAdded): ONVIFUserAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ONVIFUserAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ONVIFUserAdded;
  static deserializeBinaryFromReader(message: ONVIFUserAdded, reader: jspb.BinaryReader): ONVIFUserAdded;
}

export namespace ONVIFUserAdded {
  export type AsObject = {
    onvifuser?: ONVIFUser.AsObject,
  }
}

export class ONVIFUserChanged extends jspb.Message {
  hasOnvifuser(): boolean;
  clearOnvifuser(): void;
  getOnvifuser(): ONVIFUser | undefined;
  setOnvifuser(value?: ONVIFUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ONVIFUserChanged.AsObject;
  static toObject(includeInstance: boolean, msg: ONVIFUserChanged): ONVIFUserChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ONVIFUserChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ONVIFUserChanged;
  static deserializeBinaryFromReader(message: ONVIFUserChanged, reader: jspb.BinaryReader): ONVIFUserChanged;
}

export namespace ONVIFUserChanged {
  export type AsObject = {
    onvifuser?: ONVIFUser.AsObject,
  }
}

export class ONVIFUserRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ONVIFUserRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: ONVIFUserRemoved): ONVIFUserRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ONVIFUserRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ONVIFUserRemoved;
  static deserializeBinaryFromReader(message: ONVIFUserRemoved, reader: jspb.BinaryReader): ONVIFUserRemoved;
}

export namespace ONVIFUserRemoved {
  export type AsObject = {
    token: number,
  }
}

export class OpenStreetMapBaseUrisChanged extends jspb.Message {
  clearOpenstreetmapbaseurisList(): void;
  getOpenstreetmapbaseurisList(): Array<string>;
  setOpenstreetmapbaseurisList(value: Array<string>): void;
  addOpenstreetmapbaseuris(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenStreetMapBaseUrisChanged.AsObject;
  static toObject(includeInstance: boolean, msg: OpenStreetMapBaseUrisChanged): OpenStreetMapBaseUrisChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenStreetMapBaseUrisChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenStreetMapBaseUrisChanged;
  static deserializeBinaryFromReader(message: OpenStreetMapBaseUrisChanged, reader: jspb.BinaryReader): OpenStreetMapBaseUrisChanged;
}

export namespace OpenStreetMapBaseUrisChanged {
  export type AsObject = {
    openstreetmapbaseurisList: Array<string>,
  }
}

export class PluginAdded extends jspb.Message {
  hasPlugin(): boolean;
  clearPlugin(): void;
  getPlugin(): Plugin | undefined;
  setPlugin(value?: Plugin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginAdded.AsObject;
  static toObject(includeInstance: boolean, msg: PluginAdded): PluginAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginAdded;
  static deserializeBinaryFromReader(message: PluginAdded, reader: jspb.BinaryReader): PluginAdded;
}

export namespace PluginAdded {
  export type AsObject = {
    plugin?: Plugin.AsObject,
  }
}

export class PluginChanged extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getParameters(): string;
  setParameters(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getState(): PluginStateMap[keyof PluginStateMap];
  setState(value: PluginStateMap[keyof PluginStateMap]): void;

  getStatemessage(): string;
  setStatemessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginChanged.AsObject;
  static toObject(includeInstance: boolean, msg: PluginChanged): PluginChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginChanged;
  static deserializeBinaryFromReader(message: PluginChanged, reader: jspb.BinaryReader): PluginChanged;
}

export namespace PluginChanged {
  export type AsObject = {
    token: number,
    enabled: boolean,
    parameters: string,
    priority: number,
    state: PluginStateMap[keyof PluginStateMap],
    statemessage: string,
  }
}

export class PluginRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: PluginRemoved): PluginRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginRemoved;
  static deserializeBinaryFromReader(message: PluginRemoved, reader: jspb.BinaryReader): PluginRemoved;
}

export namespace PluginRemoved {
  export type AsObject = {
    token: number,
  }
}

export class PluginStateChanged extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getState(): PluginStateMap[keyof PluginStateMap];
  setState(value: PluginStateMap[keyof PluginStateMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginStateChanged.AsObject;
  static toObject(includeInstance: boolean, msg: PluginStateChanged): PluginStateChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PluginStateChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginStateChanged;
  static deserializeBinaryFromReader(message: PluginStateChanged, reader: jspb.BinaryReader): PluginStateChanged;
}

export namespace PluginStateChanged {
  export type AsObject = {
    token: number,
    state: PluginStateMap[keyof PluginStateMap],
    message: string,
  }
}

export class ReceiverAdded extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): Receiver | undefined;
  setReceiver(value?: Receiver): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverAdded.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverAdded): ReceiverAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverAdded;
  static deserializeBinaryFromReader(message: ReceiverAdded, reader: jspb.BinaryReader): ReceiverAdded;
}

export namespace ReceiverAdded {
  export type AsObject = {
    receiver?: Receiver.AsObject,
  }
}

export class ReceiverChanged extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): Receiver | undefined;
  setReceiver(value?: Receiver): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverChanged.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverChanged): ReceiverChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverChanged;
  static deserializeBinaryFromReader(message: ReceiverChanged, reader: jspb.BinaryReader): ReceiverChanged;
}

export namespace ReceiverChanged {
  export type AsObject = {
    receiver?: Receiver.AsObject,
  }
}

export class ReceiverRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiverRemoved): ReceiverRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiverRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverRemoved;
  static deserializeBinaryFromReader(message: ReceiverRemoved, reader: jspb.BinaryReader): ReceiverRemoved;
}

export namespace ReceiverRemoved {
  export type AsObject = {
    token: number,
  }
}

export class RecordingJobSourceAdded extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): RecordingJobSource | undefined;
  setSource(value?: RecordingJobSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceAdded): RecordingJobSourceAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceAdded;
  static deserializeBinaryFromReader(message: RecordingJobSourceAdded, reader: jspb.BinaryReader): RecordingJobSourceAdded;
}

export namespace RecordingJobSourceAdded {
  export type AsObject = {
    source?: RecordingJobSource.AsObject,
  }
}

export class RecordingJobSourceRemoved extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceRemoved): RecordingJobSourceRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceRemoved;
  static deserializeBinaryFromReader(message: RecordingJobSourceRemoved, reader: jspb.BinaryReader): RecordingJobSourceRemoved;
}

export namespace RecordingJobSourceRemoved {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
  }
}

export class RecordingJobSourceTrackAdded extends jspb.Message {
  hasTrack(): boolean;
  clearTrack(): void;
  getTrack(): RecordingJobSourceTrack | undefined;
  setTrack(value?: RecordingJobSourceTrack): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceTrackAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceTrackAdded): RecordingJobSourceTrackAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceTrackAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceTrackAdded;
  static deserializeBinaryFromReader(message: RecordingJobSourceTrackAdded, reader: jspb.BinaryReader): RecordingJobSourceTrackAdded;
}

export namespace RecordingJobSourceTrackAdded {
  export type AsObject = {
    track?: RecordingJobSourceTrack.AsObject,
  }
}

export class RecordingJobSourceTrackRemoved extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  getRecordingjobsourcetracktoken(): number;
  setRecordingjobsourcetracktoken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceTrackRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceTrackRemoved): RecordingJobSourceTrackRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceTrackRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceTrackRemoved;
  static deserializeBinaryFromReader(message: RecordingJobSourceTrackRemoved, reader: jspb.BinaryReader): RecordingJobSourceTrackRemoved;
}

export namespace RecordingJobSourceTrackRemoved {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
    recordingjobsourcetracktoken: number,
  }
}

export class RecordingLogMessage extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  hasLogmessage(): boolean;
  clearLogmessage(): void;
  getLogmessage(): LogMessage | undefined;
  setLogmessage(value?: LogMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingLogMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingLogMessage): RecordingLogMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingLogMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingLogMessage;
  static deserializeBinaryFromReader(message: RecordingLogMessage, reader: jspb.BinaryReader): RecordingLogMessage;
}

export namespace RecordingLogMessage {
  export type AsObject = {
    token: number,
    logmessage?: LogMessage.AsObject,
  }
}

export class RecordingTrackLogMessage extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getTrackid(): number;
  setTrackid(value: number): void;

  hasLogmessage(): boolean;
  clearLogmessage(): void;
  getLogmessage(): LogMessage | undefined;
  setLogmessage(value?: LogMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackLogMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackLogMessage): RecordingTrackLogMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackLogMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackLogMessage;
  static deserializeBinaryFromReader(message: RecordingTrackLogMessage, reader: jspb.BinaryReader): RecordingTrackLogMessage;
}

export namespace RecordingTrackLogMessage {
  export type AsObject = {
    recordingtoken: number,
    trackid: number,
    logmessage?: LogMessage.AsObject,
  }
}

export class RecordingAdded extends jspb.Message {
  hasRecording(): boolean;
  clearRecording(): void;
  getRecording(): Recording | undefined;
  setRecording(value?: Recording): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingAdded): RecordingAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingAdded;
  static deserializeBinaryFromReader(message: RecordingAdded, reader: jspb.BinaryReader): RecordingAdded;
}

export namespace RecordingAdded {
  export type AsObject = {
    recording?: Recording.AsObject,
  }
}

export class RecordingChanged extends jspb.Message {
  hasRecording(): boolean;
  clearRecording(): void;
  getRecording(): Recording | undefined;
  setRecording(value?: Recording): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingChanged.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingChanged): RecordingChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingChanged;
  static deserializeBinaryFromReader(message: RecordingChanged, reader: jspb.BinaryReader): RecordingChanged;
}

export namespace RecordingChanged {
  export type AsObject = {
    recording?: Recording.AsObject,
  }
}

export class RecordingRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingRemoved): RecordingRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingRemoved;
  static deserializeBinaryFromReader(message: RecordingRemoved, reader: jspb.BinaryReader): RecordingRemoved;
}

export namespace RecordingRemoved {
  export type AsObject = {
    token: number,
  }
}

export class RecordingJobAdded extends jspb.Message {
  hasRecordingjob(): boolean;
  clearRecordingjob(): void;
  getRecordingjob(): RecordingJob | undefined;
  setRecordingjob(value?: RecordingJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobAdded): RecordingJobAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobAdded;
  static deserializeBinaryFromReader(message: RecordingJobAdded, reader: jspb.BinaryReader): RecordingJobAdded;
}

export namespace RecordingJobAdded {
  export type AsObject = {
    recordingjob?: RecordingJob.AsObject,
  }
}

export class RecordingJobChanged extends jspb.Message {
  hasRecordingjob(): boolean;
  clearRecordingjob(): void;
  getRecordingjob(): RecordingJob | undefined;
  setRecordingjob(value?: RecordingJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobChanged.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobChanged): RecordingJobChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobChanged;
  static deserializeBinaryFromReader(message: RecordingJobChanged, reader: jspb.BinaryReader): RecordingJobChanged;
}

export namespace RecordingJobChanged {
  export type AsObject = {
    recordingjob?: RecordingJob.AsObject,
  }
}

export class RecordingJobRemoved extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobRemoved): RecordingJobRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobRemoved;
  static deserializeBinaryFromReader(message: RecordingJobRemoved, reader: jspb.BinaryReader): RecordingJobRemoved;
}

export namespace RecordingJobRemoved {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
  }
}

export class RecordingTrackAdded extends jspb.Message {
  hasRecordingtrack(): boolean;
  clearRecordingtrack(): void;
  getRecordingtrack(): RecordingTrack | undefined;
  setRecordingtrack(value?: RecordingTrack): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackAdded): RecordingTrackAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackAdded;
  static deserializeBinaryFromReader(message: RecordingTrackAdded, reader: jspb.BinaryReader): RecordingTrackAdded;
}

export namespace RecordingTrackAdded {
  export type AsObject = {
    recordingtrack?: RecordingTrack.AsObject,
  }
}

export class RecordingTrackChanged extends jspb.Message {
  hasRecordingtrack(): boolean;
  clearRecordingtrack(): void;
  getRecordingtrack(): RecordingTrack | undefined;
  setRecordingtrack(value?: RecordingTrack): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackChanged.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackChanged): RecordingTrackChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackChanged;
  static deserializeBinaryFromReader(message: RecordingTrackChanged, reader: jspb.BinaryReader): RecordingTrackChanged;
}

export namespace RecordingTrackChanged {
  export type AsObject = {
    recordingtrack?: RecordingTrack.AsObject,
  }
}

export class RecordingTrackRemoved extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackRemoved): RecordingTrackRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackRemoved;
  static deserializeBinaryFromReader(message: RecordingTrackRemoved, reader: jspb.BinaryReader): RecordingTrackRemoved;
}

export namespace RecordingTrackRemoved {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
  }
}

export class RecordingActiveJobChanged extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  hasActivejob(): boolean;
  clearActivejob(): void;
  getActivejob(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setActivejob(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingActiveJobChanged.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingActiveJobChanged): RecordingActiveJobChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingActiveJobChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingActiveJobChanged;
  static deserializeBinaryFromReader(message: RecordingActiveJobChanged, reader: jspb.BinaryReader): RecordingActiveJobChanged;
}

export namespace RecordingActiveJobChanged {
  export type AsObject = {
    recordingtoken: number,
    activejob?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class RecordingJobSourceTrackActiveParametersChanged extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  getRecordingjobsourcetracktoken(): number;
  setRecordingjobsourcetracktoken(value: number): void;

  clearActiveparametersList(): void;
  getActiveparametersList(): Array<string>;
  setActiveparametersList(value: Array<string>): void;
  addActiveparameters(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceTrackActiveParametersChanged.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceTrackActiveParametersChanged): RecordingJobSourceTrackActiveParametersChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceTrackActiveParametersChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceTrackActiveParametersChanged;
  static deserializeBinaryFromReader(message: RecordingJobSourceTrackActiveParametersChanged, reader: jspb.BinaryReader): RecordingJobSourceTrackActiveParametersChanged;
}

export namespace RecordingJobSourceTrackActiveParametersChanged {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
    recordingjobsourcetracktoken: number,
    activeparametersList: Array<string>,
  }
}

export class RecordingJobSourceTrackState extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingjobtoken(): number;
  setRecordingjobtoken(value: number): void;

  getRecordingjobsourcetoken(): number;
  setRecordingjobsourcetoken(value: number): void;

  getRecordingjobsourcetracktoken(): number;
  setRecordingjobsourcetracktoken(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getState(): RecordingJobStateMap[keyof RecordingJobStateMap];
  setState(value: RecordingJobStateMap[keyof RecordingJobStateMap]): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingJobSourceTrackState.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingJobSourceTrackState): RecordingJobSourceTrackState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingJobSourceTrackState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingJobSourceTrackState;
  static deserializeBinaryFromReader(message: RecordingJobSourceTrackState, reader: jspb.BinaryReader): RecordingJobSourceTrackState;
}

export namespace RecordingJobSourceTrackState {
  export type AsObject = {
    recordingtoken: number,
    recordingjobtoken: number,
    recordingjobsourcetoken: number,
    recordingjobsourcetracktoken: number,
    time: number,
    state: RecordingJobStateMap[keyof RecordingJobStateMap],
    error: string,
  }
}

export class RecordingTrackCodecAdded extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  getCodecid(): number;
  setCodecid(value: number): void;

  getCodec(): CodecMap[keyof CodecMap];
  setCodec(value: CodecMap[keyof CodecMap]): void;

  getParameters(): string;
  setParameters(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackCodecAdded.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackCodecAdded): RecordingTrackCodecAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackCodecAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackCodecAdded;
  static deserializeBinaryFromReader(message: RecordingTrackCodecAdded, reader: jspb.BinaryReader): RecordingTrackCodecAdded;
}

export namespace RecordingTrackCodecAdded {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
    codecid: number,
    codec: CodecMap[keyof CodecMap],
    parameters: string,
    timestamp: number,
  }
}

export class RecordingTrackCodecRemoved extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  getCodecid(): number;
  setCodecid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackCodecRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackCodecRemoved): RecordingTrackCodecRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackCodecRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackCodecRemoved;
  static deserializeBinaryFromReader(message: RecordingTrackCodecRemoved, reader: jspb.BinaryReader): RecordingTrackCodecRemoved;
}

export namespace RecordingTrackCodecRemoved {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
    codecid: number,
  }
}

export class ServerLogMessage extends jspb.Message {
  hasLogmessage(): boolean;
  clearLogmessage(): void;
  getLogmessage(): LogMessage | undefined;
  setLogmessage(value?: LogMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLogMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLogMessage): ServerLogMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerLogMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLogMessage;
  static deserializeBinaryFromReader(message: ServerLogMessage, reader: jspb.BinaryReader): ServerLogMessage;
}

export namespace ServerLogMessage {
  export type AsObject = {
    logmessage?: LogMessage.AsObject,
  }
}

export class RecordingTrackSetData extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  clearIndicesList(): void;
  getIndicesList(): Array<Index>;
  setIndicesList(value: Array<Index>): void;
  addIndices(value?: Index, index?: number): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackSetData.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackSetData): RecordingTrackSetData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackSetData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackSetData;
  static deserializeBinaryFromReader(message: RecordingTrackSetData, reader: jspb.BinaryReader): RecordingTrackSetData;
}

export namespace RecordingTrackSetData {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
    indicesList: Array<Index.AsObject>,
  }
}

export class RecordingTrackDeleteData extends jspb.Message {
  getRecordingtoken(): number;
  setRecordingtoken(value: number): void;

  getRecordingtrackid(): number;
  setRecordingtrackid(value: number): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setStart(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setEnd(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingTrackDeleteData.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingTrackDeleteData): RecordingTrackDeleteData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordingTrackDeleteData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingTrackDeleteData;
  static deserializeBinaryFromReader(message: RecordingTrackDeleteData, reader: jspb.BinaryReader): RecordingTrackDeleteData;
}

export namespace RecordingTrackDeleteData {
  export type AsObject = {
    recordingtoken: number,
    recordingtrackid: number,
    start?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    end?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class UserAdded extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAdded.AsObject;
  static toObject(includeInstance: boolean, msg: UserAdded): UserAdded.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAdded;
  static deserializeBinaryFromReader(message: UserAdded, reader: jspb.BinaryReader): UserAdded;
}

export namespace UserAdded {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UserChanged extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  getGrouptoken(): number;
  setGrouptoken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserChanged.AsObject;
  static toObject(includeInstance: boolean, msg: UserChanged): UserChanged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserChanged;
  static deserializeBinaryFromReader(message: UserChanged, reader: jspb.BinaryReader): UserChanged;
}

export namespace UserChanged {
  export type AsObject = {
    token: number,
    grouptoken: number,
  }
}

export class UserRemoved extends jspb.Message {
  getToken(): number;
  setToken(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRemoved.AsObject;
  static toObject(includeInstance: boolean, msg: UserRemoved): UserRemoved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRemoved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRemoved;
  static deserializeBinaryFromReader(message: UserRemoved, reader: jspb.BinaryReader): UserRemoved;
}

export namespace UserRemoved {
  export type AsObject = {
    token: number,
  }
}

export class SubscribeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
  }
}

export class SubscribeResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): google_protobuf_any_pb.Any | undefined;
  setMessage(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
  static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
  export type AsObject = {
    message?: google_protobuf_any_pb.Any.AsObject,
  }
}

export interface CodecMap {
  CODECMETADATA: 0;
  CODECMJPEG: 1;
  CODECMPEG4: 2;
  CODECH264: 3;
  CODECH265: 4;
  CODECOBJECTDETECTOR: 5;
  CODECPCMU: 6;
  CODECG726_32: 7;
}

export const Codec: CodecMap;

export interface FileMonitorStateMap {
  FILEMONITORSTATEUNAVAILABLE: 0;
  FILEMONITORSTATEAVAILABLE: 1;
}

export const FileMonitorState: FileMonitorStateMap;

export interface FileStateMap {
  FILESTATEUNMOUNTED: 0;
  FILESTATEMOUNTED: 1;
  FILESTATEMOUNTING: 2;
  FILESTATEUNMOUNTING: 3;
}

export const FileState: FileStateMap;

export interface GPSDeviceStateMap {
  GPSDEVICESTATEIDLE: 0;
  GPSDEVICESTATEACTIVE: 1;
  GPSDEVICESTATEERROR: 2;
}

export const GPSDeviceState: GPSDeviceStateMap;

export interface ONVIFUserLevelMap {
  ONVIFUSERLEVELNONE: 0;
  ONVIFUSERLEVELANONYMOUS: 1;
  ONVIFUSERLEVELUSER: 2;
  ONVIFUSERLEVELOPERATOR: 3;
  ONVIFUSERLEVELADMINISTRATOR: 4;
}

export const ONVIFUserLevel: ONVIFUserLevelMap;

export interface PluginStateMap {
  PLUGINSTATEIDLE: 0;
  PLUGINSTATEACTIVE: 1;
  PLUGINSTATEDESTROYING: 2;
  PLUGINSTATEERROR: 3;
}

export const PluginState: PluginStateMap;

export interface ReceiverModeMap {
  RECEIVERMODEAUTOCONNECT: 0;
  RECEIVERMODEALWAYSCONNECT: 1;
  RECEIVERMODENEVERCONNECT: 2;
}

export const ReceiverMode: ReceiverModeMap;

export interface ReceiverStateMap {
  RECEIVERSTATENOTCONNECTED: 0;
  RECEIVERSTATECONNECTING: 1;
  RECEIVERSTATECONNECTED: 2;
}

export const ReceiverState: ReceiverStateMap;

export interface RecordingJobStateMap {
  RECORDINGJOBSTATEIDLE: 0;
  RECORDINGJOBSTATEACTIVE: 1;
  RECORDINGJOBSTATEERROR: 2;
  RECORDINGJOBSTATEACTIVENOTRECORDING: 3;
}

export const RecordingJobState: RecordingJobStateMap;

export interface SeverityMap {
  SEVERITYTRACE: 0;
  SEVERITYDEBUG: 1;
  SEVERITYINFO: 2;
  SEVERITYWARN: 3;
  SEVERITYERR: 4;
  SEVERITYCRITICAL: 5;
}

export const Severity: SeverityMap;

export interface TrackTypeMap {
  TRACKTYPEVIDEO: 0;
  TRACKTYPEAUDIO: 1;
  TRACKTYPEMETADATA: 2;
}

export const TrackType: TrackTypeMap;

