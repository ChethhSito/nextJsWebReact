'use client';
import { getClientebyId,deleteCliente } from "@/api/CrudClientes";
import { cliente } from "@/interfaces/clienteInter";
import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import Swal from "sweetalert2";

export default function deleteClient(){
    const[idBuscar, setIdBuscar] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [cliente, setCliente] = useState<cliente>({
        _id: "",
        nombre_completo: "",
        dni: "",
        correo_electronico: "",
        telefono: "",
        fecha_registro: new Date(),
        estado: "activo",});
    const handleClick = async (id: string) => {
        try{
           const clienteEncontrado = await getClientebyId(id);
            if (!clienteEncontrado) {
                console.error("Cliente no encontrado con el ID proporcionado:", id);
                Swal.fire("Error", "Cliente no encontrado con el ID proporcionado.", "error");
                return;
            }else{
            setCliente({
                ...clienteEncontrado,
            fecha_registro: new Date(clienteEncontrado.fecha_registro), // Asegurarse de que fecha_registro sea un objeto Date
            }    
            );}
        }catch (error) {
            console.error("Error al buscar el cliente:", error);
            Swal.fire("Error", "No se encontró el cliente con ese ID.", "error");

        }
    }
    const handleDelete = async (id: string) => {
        try {
            if(!id) {
                console.error("ID no proporcionado para eliminar el cliente.");
                Swal.fire("Error", "Por favor, ingrese un ID válido.", "error");
            }
                else{
            await deleteCliente(id);
            Swal.fire("Cliente eliminado", "El cliente ha sido eliminado correctamente.", "success");
            console.log("Cliente eliminado:", id);
            setCliente({
                _id: "",
                nombre_completo: "",
                dni: "",
                correo_electronico: "",
                telefono: "",
                fecha_registro: new Date(),
                estado: "inactivo",
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
            <h1 className="mb-8">ELIMINAR A UN CLIENTE</h1>
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
                      </div >
                      <div className="flex justify-between max-w-4xl mx-auto mt-10 p-8 h-full text-xl font-mono rounded-lg bg-emerald-800 text-black font-medium items-center">
                        <div className="flex-1 max-w-lg p-4 bg-white shadow-md rounded-lg">
                            <h2 className="text-xl font-semibold text-gray-800">{cliente.nombre_completo}</h2>
                            <p className="text-sm text-gray-600">DNI: {cliente.dni}</p>
                            <p className="text-sm text-gray-600">Correo: {cliente.correo_electronico}</p>
                            <p className="text-sm text-gray-600">Teléfono: {cliente.telefono}</p>
                            <p className="text-sm text-gray-600">Estado: 
                                <span className={`ml-2 font-bold ${cliente.estado ? 'text-green-600' : 'text-red-600'}`}>
                                {cliente.estado ? 'Activo' : 'Inactivo'}
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
                      </main>
                      </div>
                      )  
}