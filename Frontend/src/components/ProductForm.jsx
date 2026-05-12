import { useForm } from 'react-hook-form';
import axios from 'axios';

const ProductForm = ({ shopID, user, onClose, onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const payload = {
                name: data.name,
                price: Number(data.price),
                description: data.description,
                shopID: shopID
            };

            await axios.post('http://localhost:3000/api/products', payload, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            onSuccess();
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
        }
    };

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-light tracking-tight text-black">
                    Novo Produto
                </h2>
                <p className="mt-2 text-sm text-gray-500 font-light">
                    Cadastre um novo item ao seu catálogo.
                </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                            Nome do Produto
                        </label>
                        <input
                            {...register('name', { required: true })}
                            className="appearance-none block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all sm:text-sm"
                            placeholder="Ex: Camiseta Minimalista"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                            Preço (R$)
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            {...register('price', { required: true })}
                            className="appearance-none block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all sm:text-sm"
                            placeholder="0,00"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                            Descrição
                        </label>
                        <textarea
                            rows={3}
                            {...register('description', { required: true })}
                            className="appearance-none block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all sm:text-sm resize-none"
                            placeholder="Descreva as características do produto"
                        />
                    </div>
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 py-3 px-4 border border-gray-200 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="flex-1 py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-all active:scale-95"
                    >
                        Salvar Produto
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;