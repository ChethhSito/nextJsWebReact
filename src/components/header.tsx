
export const Header = ({onMenuClick}:{onMenuClick:()=>void}) => {
    return (
        <header className="bg-background text-white p-4 w-full ">
            <div className=" flex justify-between items-center h-20 w-full px-8">
                <button onClick={onMenuClick} className="w-1/3">
                <img className=" h-16 w-1/5 rounded-2xl" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHB1ZXlqN2RrcGpieThrOTluY3F4eDB0MWYzdXhra2JkazE4amhrOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9gISqB3tncMmY/giphy.gif"></img>
                </button>
                
                <nav className=" justify-end  flex">
                    <ul className="flex space-x-8 text-xl font-mono w-full">
                        <button className="rounded-2xl
                        px-8
                        py-2
                    bg-cyan-900
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
                    select-none"><a href="/" className="hover:underline">HOME</a></button>
                        <button className="rounded-2xl px-8 py-2
                    bg-cyan-900
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
                    select-none"><a href="/clients" className="hover:underline">CLIENTES</a></button>
                        <button className="rounded-2xl px-8 py-2
                    bg-cyan-900
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
                    select-none"><a href="/directions" className="hover:underline">DIRECCIONES</a></button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}