import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.imagesUrls || [];

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                {images.length > 0 ? (
                    <>
                        <img 
                            src={images[currentImageIndex]} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                                >
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button 
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                                >
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {images.map((_, idx) => (
                                        <div key={idx} className={`h-1 w-1 rounded-full transition-all ${idx === currentImageIndex ? 'bg-black w-3' : 'bg-gray-300'}`} />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-200">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-black line-clamp-1">
                        {product.name}
                    </h3>
                    <span className="text-sm font-semibold text-black">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                </div>
                
                <p className="text-xs text-gray-500 font-light line-clamp-2 mb-6 flex-grow">
                    {product.description}
                </p>

                <button className="w-full py-2.5 border border-black text-black text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 active:scale-[0.98]">
                    Ver detalhes
                </button>
            </div>
        </div>
    );
};

export default ProductCard;