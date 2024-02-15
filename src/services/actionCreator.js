import { HTTP } from "./Http.service";

export function loginUser(params) {
    const url = '/auth/login';
    return new Promise((resolve, reject) => {
      HTTP('post', url, params)
        .then((result) => {
          if (result)
            resolve(result.data)
        })
        .catch((error) => {
          
          reject(error);
        });
    });
  }
export function registerUser(params) {
    const url = '/auth/register';
    return new Promise((resolve, reject) => {
      HTTP('post', url, params)
        .then((result) => {
          if (result)
            resolve(result.data)
        })
        .catch((error) => {
          reject(error);
        });
    });
}