import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch(`https://good-garden.herokuapp.com/api/v1/plants/`);
  const json = await res.json();
  return json;
}

export function usePlants() {
  return useQuery(["plants"], fetchData);
}
