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
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(data);
  xhr.onload = () => console.log(xhr.response);
  xhr.onerror = function () {
    console.log(`Ошибка`);
  };
};

getData({
  url: "db.json",
}).then((data) =>
  sendData({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify(data),
  })
);
