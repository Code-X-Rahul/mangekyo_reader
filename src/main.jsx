import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserContext.jsx'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient, useQuery, } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
          <ReactQueryDevtools />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
