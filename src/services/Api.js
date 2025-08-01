import axios from "axios";

// post - criar chave pix
export const chaveApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/chave`
})

// get / post - listar ou criar os clientes
export const clienteApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/cliente`
})

// get / put / delete - listar, atualizar ou deletar cliente pelo ID
export const infoClienteApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/cliente`
})

// post - login
export const loginApi = axios.create({
  baseURL: `https://limeiraweb.com.br/pixsenac/login`
})

// post - criar uma chave pix
export const criarChavePix = axios.create({
  baseURL: 'https://limeiraweb.com.br/pixsenac/chave'
})

// get / post - lista todas as transações e enviar pix
export const transacaoApi = axios.create({
  baseURL: 'https://limeiraweb.com.br/pixsenac/transacao'
})
