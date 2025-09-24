import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'

import { ThemeProvider } from "@/components/theme-provider.tsx"

import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner'
import AppRoutes from './AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoutes />
        </ThemeProvider>
    </BrowserRouter>
    <Toaster richColors />
  </StrictMode>,
)
