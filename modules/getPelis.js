import axios from "axios";

export default async function getPelis(numPag=1) {
  let headersList = {
    Accept: "*/*",
    // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDUxNGM0OTIyNmNlNGJkMTgzNThlZWYzODMyNjJkZSIsInN1YiI6IjY0MjY0N2Y5N2Y2YzhkMDBmNDU4YzgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R-cPCrDKDjUFXgPXayJjV9BZSJ0w4OExD93L1W2-FlU",
  };

  let reqOptions = {
    url: `https://api.themoviedb.org/3/movie/popular?api_key=24514c49226ce4bd18358eef383262de&language=es-ES&page=${numPag}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  return response;
}
