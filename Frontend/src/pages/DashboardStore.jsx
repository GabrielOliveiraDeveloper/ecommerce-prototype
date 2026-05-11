import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const DashboardStore = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state || null;
    const user = state?.user || null;
    const shopID = state?.shopID || null;

    const menuItems = [
        { title: "Edição de perfil da loja", description: "Gerencie informações e aparência." },
        { title: "Produtos cadastrados", description: "Visualize e edite seu catálogo.", onClick: () => navigate('/manage-products', { state: { user, shopID } }) },
        { title: "Mensagens", description: "Responda dúvidas de clientes." },
        { title: "Pedidos", description: "Acompanhe suas vendas e entregas." }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header user={user} />
            
            <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
                <div className="mb-10">
                    <h1 className="text-3xl font-light tracking-tight text-black">
                        Dashboard da Loja
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 font-light">
                        Gerencie sua presença e operações em um só lugar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index}
                            onClick={item.onClick}
                            className="group p-6 border border-gray-100 rounded-2xl hover:border-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 group-hover:text-black transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light">
                                {item.description}
                            </p>
                            <div className="mt-4 flex justify-end">
                                <span className="text-black transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center">
                    <div className="text-gray-300 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h4 className="text-sm font-medium text-black">Visão Geral de Vendas</h4>
                    <p className="text-xs text-gray-400 mt-1">Dados analíticos estarão disponíveis em breve.</p>
                </div>
            </main>
        </div>
    );
}

export default DashboardStore;