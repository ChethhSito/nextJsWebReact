"use client";

import { use, useEffect, useState } from "react";
import { requestCliente } from "@/api/CrudDirecciones";
import {cliente} from "@/interfaces/clienteInter";

export default function ClientsPage() {
    const [clientes,setClientes] = useState<cliente[]>([]);
    useEffect(() => {
        const fecthCli = async ()=>{
            try{
                const data = await requestCliente('GET','/get',null);
                setClientes(data);
            }catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        fecthCli();
    },
    []);

    return( 
        <div>
            <main>
                <h1 className="text-2xl font-bold mb-4">Clientes</h1>
                <p className="mb-8">This page will display a list of clients.</p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre Completo</th>
                                <th>Dni</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                                <th>Fecha Registro</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                            <tbody>
                            {clientes.map((cliente,index) => (
                                <tr key={cliente._id}>
                                <td>{index}</td>
                                <td>{cliente.nombre_completo}</td>
                                <td>{cliente.dni}</td>
                                <td>{cliente.correo_electronico}</td>
                                <td>{cliente.telefono}</td>
                                <td>{new Date(cliente.fecha_registro).toLocaleDateString()}</td>
                                <td>{cliente.estado ? 'Activo' : 'Inactivo'}</td>
                            </tr>
                             ))}
                            </tbody>

                    </table>
                </div>
            </main>
        </div>
    );
}