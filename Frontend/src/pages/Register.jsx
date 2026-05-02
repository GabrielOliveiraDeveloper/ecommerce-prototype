import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const { 
        register, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        console.log(data);

        await axios.post('http://localhost:3000/auth/register', data)
            .then(response => {
                console.log('Registro bem-sucedido:', response.data);
                navigate('/login', {state: {message: 'Registro bem-sucedido! Faça login para continuar.'}});
            })
            .catch(error => {
                console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
        });

    }

    const redirectToLogin = () => {
        navigate('/login');
    }


    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 border border-gray-100 p-8 md:p-12 shadow-sm rounded-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-light tracking-tight text-black">
                        Criar Conta
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 font-light">
                        Preencha os dados abaixo para começar.
                    </p>
                </div>

            
                <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        
                        <div>
                            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                Nome Completo
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                placeholder="Seu nome"
                                {...register('name', { required: 'Nome é obrigatório' })}
                            />
                        </div>

                   
                        <div>
                            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                placeholder="nome@exemplo.com"
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
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-300 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                                placeholder="No mínimo 8 caracteres"
                                {...register('password', { required: 'Senha é obrigatória' })}
                            />
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                {...register('terms', { required: 'Você deve concordar com os termos' })}
                            />
                        </div>
                        <div className="ml-3 text-xs">
                            <label htmlFor="terms" className="text-gray-500">
                                Eu concordo com os <a href="#" className="text-black font-semibold hover:underline underline-offset-2">Termos de Serviço</a> e a <a href="#" className="text-black font-semibold hover:underline underline-offset-2">Política de Privacidade</a>.
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 transform active:scale-[0.98]"
                        >
                            Cadastrar agora
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Já possui uma conta?{' '}
                        <a href="#" className="font-semibold text-black hover:underline underline-offset-4" onClick={redirectToLogin}>
                            Fazer login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;