"use client";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Direccion } from "@/interfaces/direccionInter";
import { use, useEffect, useState } from "react";
import { editDireccion,getDireccionById } from "@/api/CrudDirecciones";


export default function editDirection() {
    const [direcciones,setDirecciones] = useState<Direccion>({
        _id: "",
        cliente_id:{_id: "", },
        direccion: "", 
        ciudad: "",
        departamento: "", 
        codigo_postal: "",
        tipo: "", 
    });
    //defino el estado para buscar por ID
    //este estado se usa para buscar un cliente por su ID y luego editarlo
    const [idBuscar, setIdBuscar] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = async (id:string) => {
        
        try {
            const direccionEncontrada = await getDireccionById(id);
            setDirecciones({
                ...direccionEncontrada,
                cliente_id: typeof direccionEncontrada.cliente_id === "object"
                ? direccionEncontrada.cliente_id
                : { _id: direccionEncontrada.cliente_id }
            })
            console.log("Direccion encontrado:", direccionEncontrada);
        } catch (error) {
            console.error("Error al buscar el cliente:", error);
        }
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
         const { _id, ...direccionSinId } = direcciones;
            

        console.log("Datos enviados:", direccionSinId);
        try {
            const response = await editDireccion(_id,direccionSinId);
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
            <h1 className="mb-8">EDITAR UN CLIENTE</h1>
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
                <label className="block mb-2">Direccion:</label>
                    <input type="text" className=" w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base "
                    placeholder="direccion"
                    value={direcciones.direccion}
                    required
                    onChange={(e) =>
                    setDirecciones({
                    ...direcciones,
                    direccion: e.target.value,
                    
              })
            }/>
            </div>
            <div >
                <label className="block mb-2">Ciudad: </label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end  text-base " 
                    placeholder="ciudad"
                    value={direcciones.ciudad}
                    required
                    onChange={(e) =>
                    setDirecciones({
                    ...direcciones,
                    ciudad: e.target.value,

              })
            }/></div>
                <div >
                <label className="block mb-2">Codigo Postal: </label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base " 
                    placeholder="codigo postal"
                    value={direcciones.codigo_postal}
                    required
                    onChange={(e) =>
                    setDirecciones({
                    ...direcciones,
                    codigo_postal: e.target.value,
              })
            }/>
                </div>
                <div >
                <label className="block mb-2">Departamento</label>
                    <input type="text" className="w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-end text-base " 
                    placeholder="departamento"
                    value={direcciones.departamento}
                    required
                    onChange={(e) =>
                    setDirecciones({
                    ...direcciones,
                    departamento: e.target.value,
              })
            }/>
            </div>
            <div >
                <label className="block mb-2">Cliente Id</label>
                    <input type="text" className="text-gray-700 w-full rounded-lg border bg-neutral-100 font-mono border-gray-300 focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-base text-end" 
                    placeholder="idCliente" value={direcciones.cliente_id._id} // Formato YYYY-MM-DD
                    disabled
                    onChange={(e) =>
                    setDirecciones({
                    ...direcciones,
                    cliente_id: { _id: e.target.value }
            })
            }/>
            </div>
            
                <div className="md:col-span-1 flex justify-end mt-4">
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