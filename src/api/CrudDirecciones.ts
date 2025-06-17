import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/clientes`;

type Metodo = 'GET' | 'POST' | 'PUT' | 'DELETE';
export async function requestCliente(
    metodo: Metodo,
    endpoint: string = "",
    data?: any,
) {
    const url = `${BASE_URL}${endpoint}`;
    try{
        const response = await axios({
            method: metodo,
            url,
            data,
        })
        return response.data;
    }catch (error) {
        throw new Error(`Error en la solicitud: ${error}`);}
}