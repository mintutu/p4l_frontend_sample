import request from "request-promise";

export default request.defaults({
  withCredentials: true, json: true, agentOptions: {
    secureProtocol: 'SSLv3_method'
  }
});
