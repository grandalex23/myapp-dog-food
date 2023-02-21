

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
   getUserInfo() {
      return fetch(`${this.url}/users/me`, {
         headers: { Authorization: this.token }
      }).then(onResponce);
   }

   getAuthorReviewInfo(id) {
      return fetch(`${this.url}/users/${id}`, {
         headers: {
            Authorization: this.token,
         },
      }).then(onResponce);
   }

   getProductInfo(id) {
      return fetch(`${this.url}/products/${id}`, {
         headers: {
            Authorization: this.token,
         },
      }).then(onResponce);
   }


   updateUserInfo(updateUser) {
      return fetch(`${this.url}/users/me`, {
         method: "PATCH",
         headers: {
            "Content-type": "application/json",
            Authorization: this.token,
         },
         body: JSON.stringify(updateUser)
      }).then(onResponce);
   }


   search(searchQuery) {
      return fetch(`${this.url}/products/search?query=${searchQuery}`, {
         headers: {
            Authorization: this.token
         }
      }).then(onResponce);
   }

   changeLikeStatus(productId, isLike) {
      console.log(isLike);
      return fetch(`${this.url}/products/likes/${productId}`, {
         method: isLike ? "DELETE" : "PUT",
         headers: {
            "Content-type": "application/json",
            Authorization: this.token,
         },
      }).then(onResponce);
   }
}

const config = {
   url: 'https://api.react-learning.ru',
   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac',
};

const api = new Api(config);

export default api;