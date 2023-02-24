const headers = {
   Accept: "application/json",
   "Content-type": "application/json",
};

const BASE_URL = "https://api.react-learning.ru";

const onResponce = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

export const signup = (data) => {
   return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
   }).then(onResponce);
};

export const signin = (data) => {
   return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
   }).then(onResponce);
};

export const checkToken = (token) => {
   return fetch(`${BASE_URL}/v2/group-8/users/me`, {
      headers: {
         ...headers,
         Authorization: `Bearer ${token}`,
      },
   }).then(onResponce);
};
