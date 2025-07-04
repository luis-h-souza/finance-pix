import axios from "axios";

export const chaveApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/chave`
})

export const clienteApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/cliente`
})
