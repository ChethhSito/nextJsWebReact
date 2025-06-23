import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus,faUserPen,faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";


export const Sidebar = () => {
const pathname = usePathname();
  const isClientsSection = pathname.startsWith('/clients');
  const isDirectionsSection = pathname.startsWith('/directions');

  const clientOptions = [
    { name: "AGREGAR", icon: faUserPlus, href: "/clients/agregarCliente", action: "agregar" },
    { name: "EDITAR", icon: faUserPen, href: "/clients/editarCliente", action: "editar" },
    { name: "ELIMINAR", icon: faUserXmark, href: "/clients/eliminarCliente", action: "eliminar" }
  ];
  const directionOptions = [
    { name: "AGREGAR", icon: faUserPlus, href: "/directions/agregarDireccion", action: "agregar" },
    { name: "EDITAR", icon: faUserPen, href: "/directions/editarDireccion", action: "editar" },
    { name: "ELIMINAR", icon: faUserXmark, href: "/directions/eliminarDireccion", action: "eliminar" }
  ];
  const activeOptions = isClientsSection ? clientOptions : 
                       isDirectionsSection ? directionOptions : 
                       [];
    console.log("Active Options:", activeOptions);
    const getIconColor = (action: string) => {
    switch (action) {
      case "agregar": return "hover:text-green-500";
      case "editar": return "hover:text-amber-300";
      case "eliminar": return "hover:text-red-500";
      default: return "";
    }
  };
    return (   

        <aside className="bg-background	 text-white w-64 h-full fixed top-0 left-0 p-4 hover:bg-gradient-to-t from-green-950  via-cyan-950 via-40% to-background to-60% transition-colors duration-300">
            <div className="flex items-center justify-center mb-8">
                <img className="h-16 w-16 " src="/mongo.png" alt="Logo" />
            </div>
            <nav>
                <ul className="space-y-4 text-center mt-20 font-mono">
                     {activeOptions.map((option) => (
                     <li key={option.href}>
              <a
                href={option.href}
                className="w-full flex items-center justify-stretch gap-2 hover:underline hover:decoration-4 hover:decoration-yellow-950 hover:font-bold"
              >
                <FontAwesomeIcon
                  icon={option.icon}
                  className={`ml-6 text-white w-1/4 h-6 items-center ${getIconColor(option.action)}`}
                />
                {option.name}
              </a>
            </li>))}</ul>
            </nav>
        </aside>

    )}