import React, { useState, useRef, useEffect } from 'react';

const Header = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const settingsRef = useRef(null);

    const navItems = ['Início', 'Sobre', 'Contato'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setIsSettingsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 flex items-center justify-between">

                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                <div className="flex-shrink-0">
                    <h1 className="text-xl font-light tracking-tighter text-black">
                        Ecommerce<span className="font-bold underline underline-offset-4">Prototype</span>
                    </h1>
                </div>

                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 outline-none"
                            placeholder="Buscar produtos..."
                        />
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-widest text-gray-500 hover:text-black font-semibold transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-2 md:ml-8">
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <div className="relative" ref={settingsRef}>
                                <button
                                    className="hidden sm:flex p-2 text-gray-400 hover:text-black transition-colors duration-200"
                                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                    aria-label="Configurações"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>

                                {isSettingsOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                                        <button
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                                            onClick={() => setIsSettingsOpen(false)}
                                        >
                                            Criar Loja
                                        </button>
                                        <button
                                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors duration-150"
                                            onClick={() => setIsSettingsOpen(false)}
                                        >
                                            Desconectar Conta
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300" aria-label="Perfil">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className="hidden sm:block p-2 text-gray-400 hover:text-black transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            <button className="px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-lg text-white bg-black hover:bg-gray-800 transition-all duration-300">
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4`}>
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-50 border border-transparent rounded-xl outline-none"
                        placeholder="Buscar..."
                    />
                </div>

                <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs uppercase tracking-widest text-gray-500 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {user && (
                    <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                        <button className="text-left text-xs uppercase tracking-widest text-gray-500 font-semibold py-1">
                            Criar Loja
                        </button>
                        <button className="text-left text-xs uppercase tracking-widest text-red-400 font-semibold py-1">
                            Desconectar Conta
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;