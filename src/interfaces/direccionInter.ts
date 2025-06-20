export interface Direccion {
    _id: string;
    cliente_id: string; // ID del cliente al que pertenece la dirección
    direccion: string; // Dirección completa
    ciudad: string; // Ciudad de la dirección
    estado: string; // Estado o provincia de la dirección
    codigo_postal: string; // Código postal de la dirección
    pais: string; // País de la dirección
    fecha_registro: Date; // Fecha de registro de la dirección
}