import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import App from './App'
import './i18n.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className=" text-foreground bg-background min-h-screen transition-colors duration-700 ease-in-out">
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>,
)