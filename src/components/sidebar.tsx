import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus,faUserPen,faUserXmark } from "@fortawesome/free-solid-svg-icons";
export const Sidebar = () => {
    return (   

        <aside className="bg-background	 text-white w-64 h-full fixed top-0 left-0 p-4 hover:bg-gradient-to-t from-green-950  via-cyan-950 via-40% to-background to-60% transition-colors duration-300">
            <div className="flex items-center justify-center mb-8">
                <img className="h-16 w-16 " src="/mongo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="space-y-4 text-center mt-20 font-mono">
                    <li><a href="/clients/agregarCliente" className=" w-full flex items-center justify-stretch gap-2 hover:underline hover:decoration-4 hover:decoration-yellow-950 hover:font-bold "><FontAwesomeIcon icon={faUserPlus} className="ml-6 text-white w-1/4 h-6 items-center hover:text-green-500" />AGREGAR</a></li>
                    <li><a href="/clients/editarCliente" className="w-full flex items-center justify-stretch gap-2 hover:underline hover:decoration-4 hover:decoration-yellow-950 hover:font-bold"><FontAwesomeIcon icon={faUserPen} className="ml-6 text-white w-1/4 h-6 items-center hover:text-amber-300"/>EDITAR</a></li>
                    <li><a href="/about" className="w-full flex items-center justify-stretch gap-2 hover:underline hover:decoration-4 hover:decoration-yellow-950 hover:font-bold"><FontAwesomeIcon icon={faUserXmark} className="ml-6 text-white w-1/4 h-6 items-center hover:text-red-500" />ELIMINAR</a></li>
                </ul>
            </nav>
        </aside>

    )}