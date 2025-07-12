import axios from "axios";

export const chaveApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/chave`
})

export const clienteApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/cliente`
})

export const infoClienteApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/cliente`
})

export const loginApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/login`
})
