import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/pages/api/api'

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const { token, tokenType } = await login(username, password);
            console.log('Login successful:', token, tokenType); // A válasz tartalmazza a tokent
    
            // A tokent tárold a localStorage-ben
            localStorage.setItem('access_token', token);
            localStorage.setItem('token_type', tokenType);
    
            
            setTimeout(() => {
                router.push('/dashboard/main');
            }, 500);
        } catch (error: any) {
            setError("Hibás felhasználónév vagy jelszó");
            console.error('Login error:', error);
        }
    };

    return (
        <div className="relative min-h-screen">
            <Image 
                alt=""
                src="/loginBG.jpg"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-35 blur-md"
            />

            <div className="relative flex justify-center items-center min-h-screen z-10">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
                    <div className="flex justify-center mb-6 text-xl font-bold text-amber-950">
                        Bejelentkezés
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 pt-4">
                            <label className="block text-sm font-bold mb-2 text-amber-950" htmlFor="username">
                                Felhasználónév
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Felhasználónév"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:shadow-2xl"
                                required
                            />
                        </div>
                        <div className="mb-6 pt-2">
                            <label className="block text-amber-950 text-sm font-bold mb-2" htmlFor="password">
                                Jelszó
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Jelszó"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:shadow-2xl"
                                required
                            />
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="w-fit bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-2xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-indigo-500 transition duration-300"
                            >
                                Bejelentkezés
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
