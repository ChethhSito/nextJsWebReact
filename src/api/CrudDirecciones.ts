import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/direcciones`;

export const getDireccion = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/get`);
        return response.data;
    }catch (error) {
        throw new Error(`Error al obtener direcciones: ${error}`);
    }   
}
export const createDireccion = async (direccion: any) => {
    try{
        const response = await axios.post(`${BASE_URL}  /add`,direccion);
        return response.data;
    }catch (error) {
        throw new Error(`Error al crear dirección: ${error}`);
    }
}
export const editDireccion = async (direccionId: any, direccion: any) => {
    try{
        const response = await axios.put(`${BASE_URL}/put/${direccionId}`, direccion);
        return response.data;

    }catch (error) {
        throw new Error(`Error al editar dirección: ${error}`);
    }
}
export const getDireccionById = async (direccionId:any)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getDir/${direccionId}`);
        return response.data;
    }catch (error) {
        throw new Error(`Error al obtener dirección por ID: ${error}`);
    }
}
export const deleteDireccion = async (direccionId:any)=>{
    try{
        const response = await axios.delete(`${BASE_URL}/delete/${direccionId}`);
        return response.data;
    }catch (error) {
        throw new Error(`Error al eliminar dirección: ${error}`);
    }
}