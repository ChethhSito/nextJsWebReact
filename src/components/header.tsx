export const Header = () => {
    return (
        <header className="bg-black text-white p-4 w-full ">
            <div className="container mx-auto flex justify-between items-center h-20">
                <img className="m-8 h-16 w-1/8 rounded-2xl" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHB1ZXlqN2RrcGpieThrOTluY3F4eDB0MWYzdXhra2JkazE4amhrOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9gISqB3tncMmY/giphy.gif"></img>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/clients" className="hover:underline">Clientes</a></li>
                        <li><a href="/about" className="hover:underline">Direcciones</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}