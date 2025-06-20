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
