import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import api from '../Components/api/api';

interface AuthData {
    userID: string | null;
    userName: string | null;
    companyName: string | null;
    companyID: string | null;
    authToken: string;
    userType: string[];
    refreshToken?: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface CompanyDetailsResponse {
    company_id: string;
    user_type: string[];
    company_name: string;
    user_name: string;
}

const AuthContext = createContext<{
    authData: AuthData;
    updateAuthData: (data: AuthData) => void;
    logout: () => void;
} | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authData, setAuthData] = useState<AuthData>({
        userID: null,
        userName: null,
        companyName: null,
        companyID: null,
        authToken: '',
        userType: [],
        refreshToken: '', // Adicione o refreshToken aqui
    });


    useEffect(() => {
        const authToken = sessionStorage.getItem('authToken');
        const refreshToken = sessionStorage.getItem('refreshToken');

        if (authToken) {
            setAuthData((prev) => ({ ...prev, authToken, refreshToken: refreshToken || '' }));
            fetchCompanyDetails(authToken);
        }
    }, []);


    const fetchCompanyDetails = async (token: string) => {
        try {
            const response = await api.get<CompanyDetailsResponse>('/auth/company-log-details', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status >= 200 && response.status < 300) {
                const { company_id, user_type, company_name, user_name } = response.data;

                // Extraindo userID do token JWT
                const payload = JSON.parse(atob(token.split('.')[1]));
                const userID = payload.sub;

                setAuthData((prev) => ({
                    ...prev,
                    userID,  // Adicionar o userID aqui
                    companyID: company_id,
                    userType: user_type,
                    companyName: company_name ? company_name.split(' ').slice(0, 2).join(' ') : null,
                    userName: user_name ? user_name.split(' ').slice(0, 2).join(' ') : null,
                }));
            } else if (response.status === 401) {
                logout();
            } else {
                throw new Error('Não foi possível obter os detalhes da empresa.');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error.message);
        }
    };


    const updateAuthData = (data: AuthData) => {
        setAuthData(data);

        sessionStorage.setItem('authToken', data.authToken || '');
        if (data.refreshToken) {
            sessionStorage.setItem('refreshToken', data.refreshToken);
        }

        // Chama fetchCompanyDetails para carregar os detalhes da empresa e do usuário
        if (data.authToken) {
            fetchCompanyDetails(data.authToken);
        }
    };


    const logout = () => {
        setAuthData({
            authToken: '',
            refreshToken: '',
            companyID: null,
            userType: [],
            companyName: null,
            userName: null,
            userID: null,
        });

        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('refreshToken'); // Remova o refreshToken também
        window.location.href = '/#login';
    };


    return (
        <AuthContext.Provider value={{ authData, updateAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
