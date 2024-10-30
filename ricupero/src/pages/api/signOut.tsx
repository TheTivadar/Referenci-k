import { useRouter } from 'next/router';

export const useSignOut = () => {
    const router = useRouter();

    const signOut = () => {
        
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
        router.push('/login'); // Válaszd ki a kívánt URL-t*/
    };

    return signOut;
};
