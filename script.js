"use strict";

const getData = ({ url: url, data: data }) => {
  return fetch(url, {
    method: "GET",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const sendData = ({ url: url, data: data }) => {
  fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const user = getData({
  url: "db.json",
});

user.then((data) =>
  sendData({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify(data),
  })
);
