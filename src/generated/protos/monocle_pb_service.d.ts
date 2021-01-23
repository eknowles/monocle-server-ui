// package: proto
// file: monocle.proto

import * as monocle_pb from "./monocle_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceAuthenticate = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof monocle_pb.AuthenticateRequest;
  readonly responseType: typeof monocle_pb.AuthenticateResponse;
};

type AuthServiceRefreshToken = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof monocle_pb.RefreshTokenRequest;
  readonly responseType: typeof monocle_pb.RefreshTokenResponse;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly Authenticate: AuthServiceAuthenticate;
  static readonly RefreshToken: AuthServiceRefreshToken;
}

type MonocleServiceAddUser = {
  readonly methodName: string;
  readonly service: typeof MonocleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof monocle_pb.AddUserRequest;
  readonly responseType: typeof monocle_pb.AddUserResponse;
};

type MonocleServiceRemoveUser = {
  readonly methodName: string;
  readonly service: typeof MonocleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof monocle_pb.RemoveUserRequest;
  readonly responseType: typeof monocle_pb.RemoveUserResponse;
};

type MonocleServiceSubscribe = {
  readonly methodName: string;
  readonly service: typeof MonocleService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof monocle_pb.SubscribeRequest;
  readonly responseType: typeof monocle_pb.SubscribeResponse;
};

export class MonocleService {
  static readonly serviceName: string;
  static readonly AddUser: MonocleServiceAddUser;
  static readonly RemoveUser: MonocleServiceRemoveUser;
  static readonly Subscribe: MonocleServiceSubscribe;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authenticate(
    requestMessage: monocle_pb.AuthenticateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  authenticate(
    requestMessage: monocle_pb.AuthenticateRequest,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.AuthenticateResponse|null) => void
  ): UnaryResponse;
  refreshToken(
    requestMessage: monocle_pb.RefreshTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.RefreshTokenResponse|null) => void
  ): UnaryResponse;
  refreshToken(
    requestMessage: monocle_pb.RefreshTokenRequest,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.RefreshTokenResponse|null) => void
  ): UnaryResponse;
}

export class MonocleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addUser(
    requestMessage: monocle_pb.AddUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.AddUserResponse|null) => void
  ): UnaryResponse;
  addUser(
    requestMessage: monocle_pb.AddUserRequest,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.AddUserResponse|null) => void
  ): UnaryResponse;
  removeUser(
    requestMessage: monocle_pb.RemoveUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.RemoveUserResponse|null) => void
  ): UnaryResponse;
  removeUser(
    requestMessage: monocle_pb.RemoveUserRequest,
    callback: (error: ServiceError|null, responseMessage: monocle_pb.RemoveUserResponse|null) => void
  ): UnaryResponse;
  subscribe(requestMessage: monocle_pb.SubscribeRequest, metadata?: grpc.Metadata): ResponseStream<monocle_pb.SubscribeResponse>;
}

