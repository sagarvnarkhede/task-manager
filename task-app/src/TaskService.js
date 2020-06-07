import axios from "axios";
export default {
  
  /** API CALLING USING GET METHOD */
  get(url, param, header) {
    var promise = new Promise(function(resolve, reject) {
      axios({
        method: "get",
        url: url,
        params: param,
        headers: header || {}
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        })
        .finally(function() {
        });
    });
    return promise;
  },

  /** API CALLING USING POST METHOD */
  post(url, data, param, headers) {
    var promise = new Promise(function(resolve, reject) {
      axios({
        method: "post",
        url: url,
        data: data,
        params: param,
        header: headers
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          
          reject(error);
        })
        .finally(function() {
          
        });
    });
    return promise;
  },
  /** API CALLING USING PUT METHOD */
  put(url, data, param) {
    var promise = new Promise(function(resolve, reject) {
      axios({
        method: "put",
        url: url,
        data: data,
        params: param
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        })
        .finally(function() {
         
        });
    });
    return promise;
  },
  /** API CALLING USING DELETE METHOD */
  delete(url, data, param) {
    var promise = new Promise(function(resolve, reject) {
      axios({
        method: "delete",
        url: url,
        data: data,
        params: param
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        })
        .finally(function() {
          
        });
    });
    return promise;
  }
  
};
// export default AxiosService;
