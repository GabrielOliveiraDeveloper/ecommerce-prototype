import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';

const RegisterShop = () => {
    const location = useLocation();

    const user = location.state?.user;
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        console.log(user);

        await axios.post('http://localhost:3000/api/shops', JSON.stringify({name: data.shopName, description: data.description, category: data.category, ownerID: user.userID}), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => {
                console.log('Loja criada com sucesso:', response.data);
            })
            .catch(error => {
                console.error('Erro ao criar loja:', error.response ? error.response.data : error.message);
            });
        

    };

    return (
        <div>
             <Header
             user = {user}
             />

            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="max-w-md w-full space-y-8 border border-gray-100 p-8 md:p-12 shadow-sm rounded-2xl">

                    <div className="text-center">
                        <h2 className="text-3xl font-light tracking-tight text-black">
                            Criar Loja
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 font-light">
                            Preencha os dados abaixo para criar sua loja.
                        </p>
                    </div>

                    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">

                            <div>
                                <label htmlFor="shopName" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                    Nome da Loja
                                </label>
                                <input
                                    id="shopName"
                                    type="text"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                    placeholder="Nome da sua loja"
                                    {...register('shopName', { required: 'Nome da loja é obrigatório' })}
                                />
                                {errors.shopName && (
                                    <p className="mt-1 text-xs text-red-500">{errors.shopName.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                    Descrição
                                </label>
                                <textarea
                                    id="description"
                                    rows={3}
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm resize-none"
                                    placeholder="Descreva sua loja em poucas palavras"
                                    {...register('description', { required: 'Descrição é obrigatória' })}
                                />
                                {errors.description && (
                                    <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                    Categoria
                                </label>
                                <select
                                    id="category"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-200 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm bg-white cursor-pointer"
                                    {...register('category', { required: 'Selecione uma categoria' })}
                                >
                                    <option value="">Selecione uma categoria</option>
                                    <option value="moda">Moda</option>
                                    <option value="eletronicos">Eletrônicos</option>
                                    <option value="casa">Casa</option>
                                    <option value="beleza">Beleza</option>
                                    <option value="esportes">Esportes</option>
                                    <option value="outros">Outros</option>
                                </select>
                                {errors.category && (
                                    <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
                                )}
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 transform active:scale-[0.98]"
                            >
                                Criar Loja
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default RegisterShop;