import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {

    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        await axios.post('http://localhost:3000/auth/login', data)
            .then(response => {
                console.log('Login bem-sucedido:', response.data);
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        });
        
    }

    
    
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 border border-gray-100 p-8 md:p-12 shadow-sm rounded-2xl">
                
                <div className="text-center">
                    <h2 className="text-3xl font-light tracking-tight text-black">
                        Bem-vindo
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 font-light">
                        Insira suas credenciais para acessar sua conta.
                    </p>
                </div>

                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-400 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                placeholder="exemplo@email.com"
                                {...register('email', { required: 'Email é obrigatório' })}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-400 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                placeholder="••••••••"
                                {...register('password', { required: 'Senha é obrigatória' })}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">


                        <div className="text-sm">
                            <a href="#" className="font-medium text-black hover:underline underline-offset-4 transition-all">
                                Esqueceu a senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 transform active:scale-[0.98]"
                        >
                            Entrar
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Não tem uma conta?{' '}
                        <a href="#" className="font-semibold text-black hover:underline underline-offset-4">
                            Cadastre-se
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;