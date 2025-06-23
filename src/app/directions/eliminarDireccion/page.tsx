'use client';
import { getClientebyId,deleteCliente } from "@/api/CrudClientes";
import { getDireccionById,deleteDireccion } from "@/api/CrudDirecciones";
import { cliente } from "@/interfaces/clienteInter";
import { Direccion } from "@/interfaces/direccionInter";
import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import Swal from "sweetalert2";

export default function deleteClient(){
    const[idBuscar, setIdBuscar] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [direcciones,setDirecciones] = useState<Direccion>({
        _id: "",
        cliente_id:{_id: "", },
        direccion: "", 
        ciudad: "",
        departamento: "", 
        codigo_postal: "",
        tipo: "", 
    });
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
    const handleDelete = async (id: string) => {
        try {
            if(!id) {
                console.error("ID no proporcionado para eliminar la Direccion.");
                Swal.fire("Error", "Por favor, ingrese un ID válido.", "error");
            }
                else{
            await deleteDireccion(id);
            Swal.fire("Direccion eliminado", "El Direccion ha sido eliminado correctamente.", "success");
            console.log("Direccion eliminado:", id);
            setDirecciones({
                 _id: "",
                    cliente_id:{_id: "", },
                    direccion: "", 
                    ciudad: "",
                    departamento: "", 
                    codigo_postal: "",
                    tipo: "",
            });
            // Aquí podrías agregar lógica para actualizar el estado o redirigir al usuario
                }
        } catch (error) {
            console.error("Error al eliminar el cliente:", error);}}

      return(
       <div>
            
             <main className={`transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
             {isOpen && <Sidebar />}   
             <Header onMenuClick={()=>setIsOpen(!isOpen)}/>
            <div className="max-w-4xl mx-auto mt-10 p-8 h-full text-xl font-mono rounded-lg bg-emerald-800 text-black font-medium">
            <h1 className="mb-8">ELIMINAR UNA DIRECCION</h1>
                 <div className="md:col-span-2 flex items-end gap-4">
                    <div className="flex-1">
                        <label className="block mb-2">Buscar por ID:</label>
                        <input
                        //aca yo defino el id a buscar y ese valor lo pasa a idBuscar
                        // el valor de idBuscar se actualiza con el input
                            onChange={e => setIdBuscar(e.target.value)}
                            type="text"
                            className="text-end w-full rounded-lg bg-neutral-100 text-black font-mono border border-white focus:border-b-blue-500 focus:ring-3 focus:ring-blue-500 focus:outline-none p-2 text-base"
                            placeholder="Ingrese el ID a eliminar"
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
                
                      <div className="flex justify-between max-w-4xl mx-auto mt-10 p-8 h-full text-xl font-mono rounded-lg bg-emerald-800 text-black font-medium items-center">
                        <div className="flex-1 max-w-lg p-4 bg-white shadow-md rounded-lg">
                            <h2 className="text-xl font-semibold text-gray-800">{direcciones.direccion}</h2>
                            <p className="text-sm text-gray-600">DNI: {direcciones.ciudad}</p>
                            <p className="text-sm text-gray-600">Correo: {direcciones.departamento}</p>
                            <p className="text-sm text-gray-600">Teléfono: {direcciones.codigo_postal}</p>
                            <p className="text-sm text-gray-600">Estado: 
                                <span className={`ml-2 font-bold ${direcciones.tipo ? 'text-green-600' : 'text-red-600'}`}>
                                {direcciones.tipo}
                                </span>
                            </p>
                            
                            </div>
                            <button
                          //y ese boton busca el cliente por id 
                          //pasa el estado de idBuscar al handleClick
                            onClick={() => handleDelete(idBuscar)}
                                 
                              type="button"
                              className=" h-1/3 px-6 py-2 rounded-2xl bg-red-600 text-white font-mono text-base border border-black shadow-[0_4px_0_0_#000] transition-all duration-150 active:translate-y-1 active:shadow-[0_2px_0_0_#000] focus:outline-none cursor-pointer select-none"
                              // onClick opcional según tu lógica de búsqueda
                          >
                              Eliminar
                          </button>
                </div>
               
                </div>
            </main>
        </div>
                      )  
}