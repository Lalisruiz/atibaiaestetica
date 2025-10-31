import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className=" mx-auto px-4 py-4 bg-[#f9f5f3] fixed top-0   w-full ">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <a href="#home">
                    <img className='w-60 ml-5' src="https://i.ibb.co/99601sS7/logolrestetica-Photoroom-1.png" alt="logo atibaia estetica" />
                    </a>
                </div>
                
                <ul className="hidden md:flex space-x-8 mt-4 text-[#A7720E] font-bold">
                    <li><a href="#home" className="hover:text-[#6D450D] transition">Home</a></li>
                    <li><a href="#especialidades" className="hover:text-[#6D450D] transition">Especialidades</a></li>
                    <li><a href="#sobre" className="hover:text-[#6D450D] transition">Sobre</a></li>
                    <li><a href="#espaco" className="hover:text-[#6D450D] transition">Espaço</a></li>
                    <li><a href="#transformacoes" className="hover:text-[#6D450D] transition">Transformações</a></li>
                </ul>
      
                <button 
                    className={`md:hidden hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
     
            <ul className={`menu-mobile md:hidden mt-4 ${isMenuOpen ? 'active' : ''}`}>
                <li className="py-2">
                    <a href="#home" className="block text-white hover:text-[#2C2416] transition" onClick={toggleMenu}>Home</a>
                </li>
                <li className="py-2">
                    <a href="#especialidades" className="block text-white hover:text-[#2C2416] transition" onClick={toggleMenu}>Especialidades</a>
                </li>
                <li className="py-2">
                    <a href="#sobre" className="block text-white hover:text-[#2C2416] transition" onClick={toggleMenu}>Sobre</a>
                </li>
                <li className="py-2">
                    <a href="#espaco" className="block text-white hover:text-[#2C2416] transition" onClick={toggleMenu}>Espaço</a>
                </li>
                <li className="py-2">
                    <a href="#transformacoes" className="block text-white hover:text-[#2C2416] transition" onClick={toggleMenu}>Transformações</a>
                </li>
            </ul>
        </nav>
    );
}