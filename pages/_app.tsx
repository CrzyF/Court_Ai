import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '@/context/AuthContext'
import LogIn from '@/components/Login'

function App({ Component, pageProps }: AppProps) {
  return( 
    <AuthContextProvider>
     <Component {...pageProps} />
    </AuthContextProvider>
  
  )
}

export default App
