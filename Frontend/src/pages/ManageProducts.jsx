import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const ProductCard = ({ product, onDelete, onEdit }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.imagesUrls || [];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="group p-6 border border-gray-100 rounded-2xl hover:border-black transition-all duration-300 flex flex-col md:flex-row gap-6 items-center shadow-sm">
            <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                {images.length > 0 ? (
                    <>
                        <img 
                            src={images[currentImageIndex]} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                        {images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white shadow-md transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white shadow-md transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                    {images.map((_, idx) => (
                                        <div key={idx} className={`h-1 w-1 rounded-full ${idx === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`} />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                )}
            </div>

            <div className="flex-grow">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-1 group-hover:text-black transition-colors">
                    {product.name}
                </h3>
                <p className="text-lg font-light text-black">R$ {product.price}</p>
                <p className="text-xs text-gray-500 font-light mt-1">{product.description}</p>
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={() => onEdit(product)}
                    className="text-gray-400 hover:text-black transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </button>
                <button 
                    onClick={() => onDelete(product._id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        </div>
    );
};

const ManageProducts = () => {
    const location = useLocation();
    const user = location.state?.user;
    const shopID = location.state?.shopID;
    
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [productToEdit, setProductToEdit] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/products/shop/${shopID}`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProduct = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            try {
                await axios.delete(`http://localhost:3000/api/products/${id}`, {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                });
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    const handleEditClick = (product) => {
        setProductToEdit(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setProductToEdit(null);
    };

    useEffect(() => {
        if (user && shopID) {
            fetchProducts();
        }
    }, [user, shopID]);

    return (
        <div className="min-h-screen bg-white">
            <Header user={user} />
            
            <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-light tracking-tight text-black">
                            Produtos da Loja
                        </h1>
                        <p className="mt-2 text-sm text-gray-500 font-light">
                            Visualize e gerencie o estoque da sua unidade.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 active:scale-95"
                    >
                        + Adicionar novo produto
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {products.map((product) => (
                            <ProductCard 
                                key={product._id} 
                                product={product} 
                                onDelete={handleDeleteProduct}
                                onEdit={handleEditClick}
                            />
                        ))}
                    </div>
                )}
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
                    <div className="max-w-md w-full bg-white border border-gray-200 p-8 md:p-12 shadow-2xl rounded-3xl transform transition-all">
                        <ProductForm 
                            shopID={shopID} 
                            user={user} 
                            productToEdit={productToEdit}
                            onClose={handleCloseModal} 
                            onSuccess={() => {
                                handleCloseModal();
                                fetchProducts();
                            }} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManageProducts;