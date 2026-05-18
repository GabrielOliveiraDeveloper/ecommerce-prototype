import { useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ product, clientID, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [paymentData, setPaymentData] = useState(null);
    const [loadingPayment, setLoadingPayment] = useState(false);

    const images = product.imagesUrls || [];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handlePayment = async () => {
        setLoadingPayment(true);
        try {
            const productOBJ = {
                idShop: product.idShop,
                price: product.price,
                _id: product._id
            };
            const response = await axios.post('http://localhost:3000/api/payments', {
                productOBJ,
                clientID
            });
            setPaymentData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingPayment(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
            <div className="fixed inset-0 pointer-events-auto" onClick={onClose} />
            
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8 shadow-2xl border border-gray-100 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-light"
                >
                    &times;
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative aspect-square w-full bg-gray-50 rounded-xl overflow-hidden group">
                        {images.length > 0 ? (
                            <img 
                                src={images[currentImageIndex]} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-200">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                        )}
                        
                        {images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md text-sm transition"
                                >
                                    &#10094;
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md text-sm transition"
                                >
                                    &#10095;
                                </button>
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                                    {images.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`h-1.5 w-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-black w-3' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-light tracking-tight text-black mb-2">{product.name}</h2>
                            <p className="text-xl font-medium text-black mb-4">
                                {product.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                            <hr className="border-gray-100 mb-4" />
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                                {product.description || 'Nenhuma descrição fornecida.'}
                            </p>
                        </div>

                        <div className="mt-auto">
                            {!paymentData ? (
                                <button
                                    onClick={handlePayment}
                                    disabled={loadingPayment}
                                    className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-xl font-medium transition disabled:bg-gray-200 disabled:text-gray-400"
                                >
                                    {loadingPayment ? 'Gerando Pix...' : 'Realizar Pagamento'}
                                </button>
                            ) : (
                                <div className="mt-4 p-4 border border-gray-100 rounded-xl bg-gray-50 flex flex-col items-center text-center">
                                    <p className="text-sm font-medium text-black mb-3">Pague com Pix para finalizar</p>
                                    <img src={paymentData.qrCodeImage} alt="QR Code Pix" className="w-40 h-40 mb-3 border bg-white p-2 rounded-lg" />
                                    <div className="w-full">
                                        <p className="text-xs text-gray-400 mb-1">Copia e Cola:</p>
                                        <input 
                                            type="text" 
                                            readOnly 
                                            value={paymentData.brCode} 
                                            onClick={(e) => e.target.select()}
                                            className="w-full text-xs p-2 bg-white border border-gray-200 rounded-lg text-center select-all cursor-pointer text-gray-600"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;