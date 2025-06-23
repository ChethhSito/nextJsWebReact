"use client";
import { Badge } from "@/components/ui/badge"
import { use, useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Direccion } from "@/interfaces/direccionInter";
import { getDireccion } from "@/api/CrudDirecciones";

export default function DirectionsPage() {
     const [direcciones,setdirecciones] = useState<Direccion[]>([]);
        const [isOpen, setIsOpen] = useState(false);
        useEffect(() => {
            getDireccion().then(data => setdirecciones(data));
        }, []);
    return( 
        
            <div className="">
                {isOpen && <Sidebar/>}                
               <main className={` transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
                    <Header onMenuClick={()=>setIsOpen(!isOpen)}/>
                    <h1 className="text-2xl font-bold my-8 w-4/5 mx-auto font-mono">DIRECCIONES</h1>
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
                                    <th>ID</th>
                                    <th>Direccion</th>
                                    <th>Ciudad</th>
                                    <th>Codigo Postal</th>
                                    <th>Departamento</th>
                                    <th>Cliente ID</th>
                                </tr>
                            </thead>
                                <tbody className="text-end ">
                                {direcciones.map((direcciones,index) => (
                                    <tr key={direcciones._id} className="">
                                    <td className="py-2  h-12">{index}</td>
                                    <td className="py-2  h-12">{direcciones.direccion}</td>
                                    <td className="py-2  h-12">{direcciones.ciudad}</td>
                                    <td className="py-2  h-12">{direcciones.codigo_postal}</td>
                                    <td className="py-2  h-12">{direcciones.departamento}</td>
                                  
                                    <td className="py-2  h-12">{direcciones.cliente_id._id}</td>
                                </tr>
                                 ))}
                                </tbody>

                        </table>
                    </div>
                </main>
            </div>
        
    );
}