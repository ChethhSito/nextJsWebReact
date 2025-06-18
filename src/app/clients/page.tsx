"use client";

import { use, useEffect, useState } from "react";
import { requestCliente } from "@/api/CrudDirecciones";
import {cliente} from "@/interfaces/clienteInter";
import { Header } from "@/components/header";

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
        
            <div className="">
                <main>  
                    <Header />                
                    <h1 className="text-2xl font-bold mb-4">Clientes</h1>
                    <div className="flex overflow-y-auto max-h-screen">
                        <table className="justify-center items-center w-full m-10 min-w-max table-auto">
                            <thead className="text-center">
                                <tr className="gap-4">
                                    <th>ID</th>
                                    <th>Nombre Completo</th>
                                    <th>Dni</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Fecha Registro</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                                <tbody className="text-center">
                                {clientes.map((cliente,index) => (
                                    <tr key={cliente._id} className="gap-4">
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