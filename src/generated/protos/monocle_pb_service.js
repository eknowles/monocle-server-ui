// package: proto
// file: monocle.proto

var monocle_pb = require("./monocle_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SubscribeService = (function () {
  function SubscribeService() {}
  SubscribeService.serviceName = "proto.SubscribeService";
  return SubscribeService;
}());

SubscribeService.Subscribe = {
  methodName: "Subscribe",
  service: SubscribeService,
  requestStream: false,
  responseStream: true,
  requestType: monocle_pb.SubscribeRequest,
  responseType: monocle_pb.SubscribeResponse
};

exports.SubscribeService = SubscribeService;

function SubscribeServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SubscribeServiceClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SubscribeService.Subscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.SubscribeServiceClient = SubscribeServiceClient;

