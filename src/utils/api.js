

const onResponce = (result) => result.ok ? result.json() : Promise.reject(`Error: ${result.status}`)


class Api {
   constructor({ url, token }) {
      this.url = url;
      this.token = `Bearer ${token}`
   }
   getAllProducts() {
      return fetch(`${this.url}/products`, {
         headers: {
            Authorization: this.token
         }
      }).then(onResponce);
   }
   getAllInfo() {
      return fetch(`${this.url}/users/me`, {
         headers: {
            Authorization: this.token
         }
      }).then(onResponce);
   }
}

const config = {
   url: 'https://api.react-learning.ru',
   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac',
};

const api = new Api(config);

export default api;