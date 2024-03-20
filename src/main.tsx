import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './global.css';
import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './AppRouter';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
        <AppRouter />
        <Toaster visibleToasts={1} position='top-right' richColors />
        </Auth0ProviderWithNavigate>  
      </QueryClientProvider>     
    </Router>
  </React.StrictMode>,
)
