/* eslint-disable prettier/prettier */
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
  return result;
};
