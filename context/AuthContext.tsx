import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children,}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    dispalyName: user.displayName,
                })
            } else{
                setUser(null)
            }
                setLoading(false)
        })

        return () => unsubscribe()

    }, [])

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}