"use client";
import { Badge } from "@/components/ui/badge"
import { use, useEffect, useState } from "react";
import { getClientes } from "@/api/CrudClientes";
import {cliente} from "@/interfaces/clienteInter";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function ClientsPage() {
    const [clientes,setClientes] = useState<cliente[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        getClientes().then(data => setClientes(data));
    }, []);

    return( 
        
            <div className="">
                {isOpen && <Sidebar />}                
               <main className={` transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
                    <Header onMenuClick={()=>setIsOpen(!isOpen)}/>
                    <h1 className="text-2xl font-bold my-8 w-4/5 mx-auto font-mono">CLIENTES</h1>
                     <div className="flex flex-col items-center gap-2 w-4/5 mx-auto ">
                        <div className="flex w-full flex-wrap gap-2 font-mono">
                            <Badge className="bg-emerald-700 text-amber-950 font-bold">MongoDB</Badge>
                            <Badge className="bg-black text-white font-bold">Next.js</Badge>
                            <Badge className="bg-red-700 text-amber-600 font-extrabold ">Oracle</Badge>
                            <Badge className="bg-blue-500 text-white font-bold">TypeScript</Badge>
                            </div>
                  </div>
                    <div className="flex overflow-y-auto max-h-screen w-5/6 mx-auto scrollbar-hide">
                        <table className="w-full m-10 min-w-max table-auto font-mono ">
                            <thead className="text-end h-12 items-end">
                                <tr className="">
                                    <th >ID</th>
                                    <th>Nombre Completo</th>
                                    <th>Dni</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Fecha Registro</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                                <tbody className="text-end ">
                                {clientes.map((cliente,index) => (
                                    <tr key={cliente._id} className="">
                                    <td className="py-2  h-12">{index}</td>
                                    <td className="py-2  h-12">{cliente.nombre_completo}</td>
                                    <td className="py-2  h-12">{cliente.dni}</td>
                                    <td className="py-2  h-12">{cliente.correo_electronico}</td>
                                    <td className="py-2  h-12">{cliente.telefono}</td>
                                    <td className="py-2  h-12">{new Date(cliente.fecha_registro).toLocaleDateString()}</td>
                                    <td className="py-2  h-12">{cliente.estado ? 'Activo' : 'Inactivo'}</td>
                                </tr>
                                 ))}
                                </tbody>

                        </table>
                    </div>
                </main>
            </div>
        
    );
}