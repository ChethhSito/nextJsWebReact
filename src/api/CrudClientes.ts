import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/clientes`;


export async function getClientes() {
    try {
        const response = await axios.get(`${BASE_URL}/get`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener clientes: ${error}`);
    }
}
export async function createCliente(cliente:any){
    try{
        const response = await axios.post(`${BASE_URL}/add`,cliente);
        return response.data;
    }catch (error) {
        throw new Error(`Error al crear cliente: ${error}`);
    }
}
export async function editCliente(clienteId : any,cliente:any){
    try {
        const response = await axios.put(`${BASE_URL}/put/${clienteId}`, cliente);
        return response.data;
    } catch (error) {
        throw new Error(`Error al editar cliente: ${error}`);
    }
}
export async function getClientebyId(clienteId: string) {
    try {
        const response = await axios.get(`${BASE_URL}/get/${clienteId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener cliente por ID: ${error}`);
    }
}
export async function deleteCliente(clienteId: string){
    try{
        const response = await axios.delete(`${BASE_URL}/delete/${clienteId}`);
        return response.data;
    }catch (error) {
        throw new Error(`Error al eliminar cliente: ${error}`);
    }
}