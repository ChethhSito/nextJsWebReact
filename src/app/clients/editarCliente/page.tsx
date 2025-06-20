"use client";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { cliente } from "@/interfaces/clienteInter";
import { use, useEffect, useState } from "react";
import { createCliente,getClientebyId } from "@/api/CrudClientes";


export default function editClient() {
    const [clientes,setClientes] = useState<cliente>({
        _id: "",
        nombre_completo: "",
        dni: "",
        correo_electronico: "",
        telefono: "",
        fecha_registro: new Date(),
        estado: "activo",
    });
    //defino el estado para buscar por ID
    //este estado se usa para buscar un cliente por su ID y luego editarlo
    const [idBuscar, setIdBuscar] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = async (id:string) => {
        
        try {
            const clienteEncontrado = await getClientebyId(id);
            setClientes({
                ...clienteEncontrado,
            fecha_registro: new Date(clienteEncontrado.fecha_registro), // Asegurarse de que fecha_registro sea un objeto Date
            }    
            );
            console.log("Cliente encontrado:", clienteEncontrado);
        } catch (error) {
            console.error("Error al buscar el cliente:", error);
        }
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
         const { _id, ...clienteSinId } = clientes;
            const clienteAEnviar = {
                ...clienteSinId,
                fecha_registro: clientes.fecha_registro.toISOString(),
            };

        console.log("Datos enviados:", clienteAEnviar);
        try {
            const response = await createCliente(clienteAEnviar);
            console.log("Cliente creado:", response);


        } catch (error) {
            console.error("Error al crear el cliente:", error);
        }
    }
    return(
        <div>
            
             <main className={`transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
             {isOpen && <Sidebar />}   
             <Header onMenuClick={()=>setIsOpen(!isOpen)}/>
            <div className="max-w-4xl mx-auto mt-10 p-8 h-full text-xl font-mono rounded-lg bg-emerald-800 text-black font-medium">
            <h1 className="mb-8">AÑADIR UN NUEVO CLIENTE</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="md:col-span-2 flex items-end gap-4">
                    <div className="flex-1">
                        <label className="block mb-2">Buscar por ID:</label>
                        <input
                        //aca yo defino el id a buscar y ese valor lo pasa a idBuscar
                        // el valor de idBuscar se actualiza con el input
                            onChange={e => setIdBuscar(e.target.value)}
                            type="text"
                            className="text-end w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-base"
                            placeholder="Ingrese el ID a editar"
                            // value y onChange opcionales según tu lógica
                        />
                    </div>
                    <button
                    //y ese boton busca el cliente por id 
                    //pasa el estado de idBuscar al handleClick
                            onClick={() => handleClick(idBuscar)}
                           
                        type="button"
                        className="px-6 py-2 rounded-2xl bg-blue-600 text-white font-mono text-base border border-black shadow-[0_4px_0_0_#000] transition-all duration-150 active:translate-y-1 active:shadow-[0_2px_0_0_#000] focus:outline-none cursor-pointer select-none"
                        // onClick opcional según tu lógica de búsqueda
                    >
                        Buscar
                    </button>
                </div>
                
                <div >
                <label className="block mb-2">Nombre Completo:</label>
                    <input type="text" className=" w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base "
                    placeholder="nombre completo"
                    value={clientes.nombre_completo}
                    required
                    onChange={(e) =>
                    setClientes({
                    ...clientes,
                    nombre_completo: e.target.value,
              })
            }/>
            </div>
            <div >
                <label className="block mb-2">Dni: </label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end  text-base " 
                    placeholder="dni"
                    value={clientes.dni}
                    required
                    onChange={(e) =>
                    setClientes({
                    ...clientes,
                    dni: e.target.value,

              })
            }/></div>
                <div >
                <label className="block mb-2">Correo Electronico: </label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base " 
                    placeholder="correo electronico"
                    value={clientes.correo_electronico}
                    required
                    onChange={(e) =>
                    setClientes({
                    ...clientes,
                    correo_electronico: e.target.value,
              })
            }/>
                </div>
                <div >
                <label className="block mb-2">Telefono</label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base " 
                    placeholder="telefono"
                    value={clientes.telefono}
                    required
                    onChange={(e) =>
                    setClientes({
                    ...clientes,
                    telefono: e.target.value,
              })
            }/>
            </div>
            <div >
                <label className="block mb-2">Fecha Registro</label>
                    <input type="date" className="w-full rounded-lg border bg-neutral-100 text-black font-mono border-gray-300 focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-base text-end" 
                    value={clientes.fecha_registro.toISOString().split("T")[0]} // Formato YYYY-MM-DD
                    required
                    onChange={(e) =>
                    setClientes({
                    ...clientes,
                    fecha_registro: new Date(e.target.value),
              })
            }/>
            </div>
            <div >
            <label className="block mb-2">Estado:</label>
                <select className="w-full rounded-lg border bg-neutral-100 text-black font-mono border-gray-300 p-2 text-start text-base "
                    value={clientes.estado}
                    onChange={(e) =>
                        setClientes({
                            ...clientes,
                            estado: e.target.value ,
                        })
                    }>
                        <option className="text-black" value="activo">Activo</option>
                        <option className="text-black" value="inactivo">Inactivo</option>
                    </select>
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                 <button type="submit" className="
                    relative
                    px-8 py-4
                    rounded-2xl
                    bg-blue-500 
                    text-black
                    font-mono
                    text-xl
                    border
                    border-black
                    shadow-[0_8px_0_0_#000]
                    transition-all
                    duration-150
                    active:translate-y-2
                    active:shadow-[0_2px_0_0_#000]
                    focus:outline-none
                    cursor-pointer
                    select-none
                    
                ">
                    AÑADIR CLIENTE
                </button>
                </div>
                </form>
               
                </div>
            </main>
        </div>
    );
}