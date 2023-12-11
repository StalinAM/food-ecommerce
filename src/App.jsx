import { useState } from 'react'
import Header from './components/Header'

import Home from './routes/Home'
import ShoppingCart from './routes/ShoppingCart'
import ItemDetails from './routes/ItemDetails'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className='px-4 pt-2 pb-4 w-full flex flex-col gap-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shopping-cart' element={<ShoppingCart />} />
          <Route path='item1' element={<ItemDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App
