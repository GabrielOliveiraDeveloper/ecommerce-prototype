import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const location = useLocation();
    const user = location.state?.user;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products/all');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header user={user} />
            
            <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
                <div className="mb-10">
                    <h1 className="text-3xl font-light tracking-tight text-black">
                        Explorar Produtos
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 font-light">
                        Confira as novidades das nossas lojas parceiras.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black"></div>
                    </div>
                ) : products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center border border-dashed border-gray-100 rounded-3xl">
                        <p className="text-gray-400 font-light">Nenhum produto encontrado no momento.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;