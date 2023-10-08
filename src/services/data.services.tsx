import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api/";

export const peopleService = () => {
  return axios.get(API_BASE_URL + "people");
};

export const peopleServicePage = (numPage:number) => {
  return axios.get(API_BASE_URL + "people?page=" + numPage);
};

export const planetsService = (idPlanet:string) => {
  return axios.get(idPlanet);
};

export const filmsService = () => {
  return axios.get(API_BASE_URL + "films");
};
