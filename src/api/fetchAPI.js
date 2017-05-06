/* global fetch */

function handleErrors(response) {
  if (!response.ok) {
    console.log("Error in fetch", response.statusText);
  }
  return response.json();
}

export function doGet(fetchUrl) {
  let getData = {
    method: 'GET',
    credentials: 'include'
  };
  return fetch(fetchUrl, getData)
    .then(handleErrors)
    .then((response) => {
      console.log("Response is OK");
      console.log("Response is ", response);
      return response;
    })
    .catch((error) => {
      console.log("Error while saving user activity");
      console.log(error);
    });
}

export function doPost(fetchUrl, data) {
  let contentType = 'application/json';
  let acceptType = 'application/json';
  let postData = {
    method: 'POST',
    headers: {
      'Accept': acceptType,
      'Content-Type': contentType
    },
    credentials: 'include',
    json: data,
    body: JSON.stringify(data)
  };
  return fetch(fetchUrl, postData)
    .then(handleErrors)
    .then((response) => {
      console.log("Response is OK");
      console.log("Response is ", response);
      return response;
    })
    .catch((error) => {
      console.log("Error while saving user activity");
      console.log(error);
    });
}
