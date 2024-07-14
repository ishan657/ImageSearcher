const ACESS_KEY = "dz8ZsGTVyeLWrY6Ct-QiSlbzGt690erq8tVmD13cpR4";
function transformData(data) {
  console.log(data);
  return data.results.map((e) => ({
    url: e.urls.full,
    likes: e.likes,
    info: e.alt_description,
  }));
}

function fetchImageFromAPI(query = "travel") {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACESS_KEY}`;
  return fetch(url, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return transformData(data);
    });
}

export default fetchImageFromAPI;
