//crear funciones de manejar toda la información del token
import { TOKEN } from "./contants";
import jwtDecode from "jwt-decode";
//pasamos el token y guardamos en local storage
export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function decodeToken(token) {
  return jwtDecode(token);
}

export function removeToken() {
  return localStorage.removeItem(TOKEN);
}
