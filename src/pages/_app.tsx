import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { AuthProvider } from '../contexts/AuthContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
          <Component {...pageProps} />
          </QueryClientProvider>
        </AuthProvider>
      </ChakraProvider>
    </PersistGate>
    </Provider>
  )
}
export default MyApp
