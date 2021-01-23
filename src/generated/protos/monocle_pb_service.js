// package: proto
// file: monocle.proto

var monocle_pb = require("./monocle_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthService = (function () {
  function AuthService() {}
  AuthService.serviceName = "proto.AuthService";
  return AuthService;
}());

AuthService.Authenticate = {
  methodName: "Authenticate",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: monocle_pb.AuthenticateRequest,
  responseType: monocle_pb.AuthenticateResponse
};

AuthService.RefreshToken = {
  methodName: "RefreshToken",
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: monocle_pb.RefreshTokenRequest,
  responseType: monocle_pb.RefreshTokenResponse
};

exports.AuthService = AuthService;

function AuthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthServiceClient.prototype.authenticate = function authenticate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.Authenticate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AuthServiceClient.prototype.refreshToken = function refreshToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthService.RefreshToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AuthServiceClient = AuthServiceClient;

var MonocleService = (function () {
  function MonocleService() {}
  MonocleService.serviceName = "proto.MonocleService";
  return MonocleService;
}());

MonocleService.AddUser = {
  methodName: "AddUser",
  service: MonocleService,
  requestStream: false,
  responseStream: false,
  requestType: monocle_pb.AddUserRequest,
  responseType: monocle_pb.AddUserResponse
};

MonocleService.RemoveUser = {
  methodName: "RemoveUser",
  service: MonocleService,
  requestStream: false,
  responseStream: false,
  requestType: monocle_pb.RemoveUserRequest,
  responseType: monocle_pb.RemoveUserResponse
};

MonocleService.Subscribe = {
  methodName: "Subscribe",
  service: MonocleService,
  requestStream: false,
  responseStream: true,
  requestType: monocle_pb.SubscribeRequest,
  responseType: monocle_pb.SubscribeResponse
};

exports.MonocleService = MonocleService;

function MonocleServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MonocleServiceClient.prototype.addUser = function addUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MonocleService.AddUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MonocleServiceClient.prototype.removeUser = function removeUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MonocleService.RemoveUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MonocleServiceClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MonocleService.Subscribe, {
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

exports.MonocleServiceClient = MonocleServiceClient;

