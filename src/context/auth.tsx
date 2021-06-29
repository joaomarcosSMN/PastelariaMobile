import React from 'react';

interface AuthContextData {
    signed: boolean;
    userToken: string | null;
    isLoading: boolean;
    signIn(): void;
    signUp(): void;
    signOut(): void;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [userToken, setUserToken] = React.useState<string | null>(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const signIn = () => {
        setIsLoading(false);
        setUserToken('TokenExample');
    };

    const signUp = () => {
        setIsLoading(false);
        setUserToken('TokenExample');
    };

    const signOut = () => {
        setIsLoading(false);
        setUserToken('');
    };

    return (
        <AuthContext.Provider
            value={{
                signed: !!userToken,
                userToken,
                isLoading,
                signUp,
                signIn,
                signOut
            }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth precisa ser usado dentro de AuthProvider.');
    }

    return context;
}

export {AuthProvider, useAuth};
