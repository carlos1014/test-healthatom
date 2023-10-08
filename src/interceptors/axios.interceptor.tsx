import axios from "axios";

export const AxiosInterceptor = () => {
    axios.interceptors.request.use(function (config) {
        console.log('request', config)
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
};
