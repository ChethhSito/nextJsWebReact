export interface Direccion {
    _id: string;
    cliente_id:{_id: string; }// ID del cliente al que pertenece la dirección
    direccion: string; // Dirección completa
    ciudad: string; // Ciudad de la dirección
    departamento: string; // País de la dirección
    codigo_postal: string; // Código postal de la dirección
    tipo: string; // Fecha de registro de la dirección
}