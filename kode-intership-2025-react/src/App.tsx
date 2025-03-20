import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store.ts';
import './style/App.css';
import 'normalize.css';
import DetailsCard from './pages/DetailsCard.tsx'
import MainPage from './pages/MainPage.tsx';



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/details/:id' element={<DetailsCard />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)
