// todo: https://dev.to/nilanth/how-to-use-axios-in-an-optimized-and-scalable-way-with-react-518n

import axios from 'axios';
export const BASE_URL = ``;

// var fakeHeader = { Authorization: ' ngrok-skip-browser-warning' };

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Accept: '*/*',
  },
  timeout: 2000,
  withCredentials: true,
});

// add log axios
// curlirize(axiosClient);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const res = error?.response;
    switch (res?.status) {
      case 401:
        // navigate('Login');
        console.log('error : 401');
      default:
        console.log(`axios | status code | other: `, error);
    }
    return Promise.reject(error);
  },
);

export async function getRequest(URL: string) {
  return await axiosClient.get(`/${URL}`);
}

export async function postRequest(URL: string, payload: unknown) {
  return await axiosClient.post(`/${URL}`, payload);
}

export async function patchRequest(URL: string, payload: unknown) {
  return await axiosClient.patch(`/${URL}`, payload);
}

export async function deleteRequest(URL: string) {
  return axiosClient.delete(`/${URL}`);
}
