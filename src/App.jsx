import { useState } from 'react'
import Header from './components/Header'

import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import ItemDetails from './pages/ItemDetails'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className='px-4 pt-2 pb-4 w-full flex flex-col gap-6'>
        {/* <Home /> */}
        {/* <ShoppingCart /> */}
        <ItemDetails />
      </main>
    </>
  )
}

export default App
