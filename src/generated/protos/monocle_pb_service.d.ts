// package: proto
// file: monocle.proto

import * as monocle_pb from "./monocle_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SubscribeServiceSubscribe = {
  readonly methodName: string;
  readonly service: typeof SubscribeService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof monocle_pb.SubscribeRequest;
  readonly responseType: typeof monocle_pb.SubscribeResponse;
};

export class SubscribeService {
  static readonly serviceName: string;
  static readonly Subscribe: SubscribeServiceSubscribe;
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

export class SubscribeServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  subscribe(requestMessage: monocle_pb.SubscribeRequest, metadata?: grpc.Metadata): ResponseStream<monocle_pb.SubscribeResponse>;
}

