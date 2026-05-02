import React from 'react';

const Header = () => {
    return (
        <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
            
            <div className="flex-shrink-0">
                <h1 className="text-xl font-light tracking-tighter text-black">
                    Ecommerce<span className="font-bold underline underline-offset-4">Prototype</span>
                </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
                {['Início', 'Produtos', 'Sobre', 'Contato'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-xs uppercase tracking-widest text-gray-500 hover:text-black font-semibold transition-colors duration-200"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className="flex items-center space-x-4">
               
                <button 
                    className="p-2 text-gray-400 hover:text-black transition-colors duration-200"
                    aria-label="Configurações"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

                
                <button
                    className="px-5 py-2 text-xs uppercase tracking-widest font-semibold rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-300 transform active:scale-[0.95]"
                >
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;