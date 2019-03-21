import axios from 'axios';
import {Modal} from 'antd';

const instance = axios.create();

// handle global request
instance.interceptors.request.use(config => {
  return config;
});

// handle global response
instance.interceptors.response.use(response => {
  console.log(response)
  if (response.status === 200 && response.data.code === 0) {
    return response.data;
  } else {
    Modal.warning({
      title: '服务错误',
      content: response.data.message,
    });
    throw new Error(response.data.message);  // TODO check error message
  }
}, function(error) {
  // return Promise.reject(error);
});

export default instance;