import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'normalize.css';
import App from './App.tsx'
import DetailsCard from './pages/details/DetailsCard.tsx'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
          <Route path='details' element={<DetailsCard />}/>
      </Routes>
    </BrowserRouter>
)
