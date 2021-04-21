/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
export const chunkArray = (array, value) => {
  const chunkContainer = [],
    times = array.length / value,
    arrayRest = array;
  for (let i = 0; i < times; i++) {
    let chunk = [];
    chunk = arrayRest.splice(0, value);
    chunkContainer.push(chunk);
  }
  return chunkContainer;
};

export const getFetch = async (endpoint, page) => {
  let url;
  page !== null
    ? (url = `${process.env.VUE_APP_BASE_URL}${endpoint}?page=${page}`)
    : (url = `${process.env.VUE_APP_BASE_URL}${endpoint}`);
  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const createUser = async (userInfo) => {
  const body = {
    first_name: userInfo.firstName,
    last_name: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password,
  };
  const response = await fetch(`${process.env.VUE_APP_BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "content-type": "application/json",
    }),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
export const login = async (user) => {
  const response = await fetch(`${process.env.VUE_APP_BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "content-type": "application/json",
    }),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const getFromLocal = () => {
  let values = [];
  const keys = Object.keys(localStorage).filter((key) => key.includes("user"));
  console.log(keys);
  if (keys.length > 0) {
    values = keys.map((key) => JSON.parse(localStorage[key]));
  }
  return values;
};
