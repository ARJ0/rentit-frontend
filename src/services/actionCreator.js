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

export function addEquipment(params) {
  const url = '/equipment/add';
  const headers = { withCredentials: true };
  return new Promise((resolve, reject) => {
    HTTP('post', url, params, headers)
      .then((result) => {
        if (result)
          resolve(result.data)
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export function getAllEquipment(params) {
  const url = '/equipment/getAllEquipment';
  const headers = { withCredentials: true };
  return new Promise((resolve, reject) => {
    HTTP('get', url, params, headers)
      .then((result) => {
        if (result)
          resolve(result.data)
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getEquipmentByCompnyId(params) {
  const url = '/equipment/getEquipmentByCompnyId';
  const headers = { withCredentials: true };
  return new Promise((resolve, reject) => {
    HTTP('post', url, params, headers)
      .then((result) => {
        if (result)
          resolve(result.data)
      })
      .catch((error) => {
        reject(error);
      });
  });
}