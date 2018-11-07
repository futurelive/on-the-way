export default axiosPromise => new Promise((resolve, reject) => {
  axiosPromise.then(response => resolve(response))
    .catch((error) => {
      if (error.response.status === 401) reject(new Error('No Permission'));
      reject(new Error('Network Error'));
    });
});
