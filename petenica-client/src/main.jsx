
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import AuthProviders from './Provider/AuthProviders'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes}></RouterProvider>
        </QueryClientProvider>
    </AuthProviders>
)