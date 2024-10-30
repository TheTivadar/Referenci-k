import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthMe } from "@/pages/api/api"; // Importáld az AuthMe-t

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const userData = await AuthMe();
            setIsAuthenticated(userData.authenticated);
            setLoading(false);

            if (!userData.authenticated) {
                router.push('/login'); // Átirányítás a bejelentkező oldalra
            }
        };

        checkAuth();
    }, [router]);

    return <>{children}</>;
};

export default ProtectedRoute;