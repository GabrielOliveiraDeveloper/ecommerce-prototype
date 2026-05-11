import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const ManageShops = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchShops = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/shops/owner/${user.userID}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            setShops(response.data);
        } catch (error) {
            console.error('Erro ao buscar lojas:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchShops();
        }
    }, [user]);

    const handleManageShop = (shopID) => {
        navigate('/dashboard-store', { state: { user, shopID } });
    };

    return (
        <div className="min-h-screen bg-white">
            <Header user={user} />

            <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-light tracking-tight text-black">
                            Minhas Lojas
                        </h1>
                        <p className="mt-2 text-sm text-gray-500 font-light">
                            Gerencie suas unidades de negócio cadastradas.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/register-shop', { state: { user } })}
                        className="px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-95"
                    >
                        + Nova Loja
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black"></div>
                    </div>
                ) : shops.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {shops.map((shop) => (
                            <div
                                key={shop._id}
                                onClick={() => handleManageShop(shop._id)}
                                className="group p-8 border border-gray-100 rounded-2xl hover:border-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold px-2 py-1 bg-gray-50 rounded group-hover:bg-black group-hover:text-white transition-colors">
                                        {shop.category}
                                    </span>
                                    <span className="text-black transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-light text-black mb-3">
                                    {shop.name}
                                </h3>
                                
                                <p className="text-sm text-gray-500 font-light line-clamp-2 mb-6 flex-grow">
                                    {shop.description}
                                </p>

                                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-light">
                                        CRIADA EM: {new Date(shop.createdAt).toLocaleDateString('pt-BR')}
                                    </span>
                                    <span className="text-xs font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity">
                                        Gerenciar
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 p-16 border border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-center">
                        <div className="text-gray-200 mb-6">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-light text-black">Nenhuma loja encontrada</h4>
                        <p className="text-sm text-gray-400 mt-2 max-w-xs">Você ainda não possui lojas cadastradas em sua conta.</p>
                        <button
                            onClick={() => navigate('/register-shop', { state: { user } })}
                            className="mt-8 text-sm font-semibold text-black hover:underline underline-offset-8"
                        >
                            Começar agora
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ManageShops;