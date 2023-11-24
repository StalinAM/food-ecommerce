import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className='p-4'>
        <Filter />
      </main>
    </>
  )
}

export default App
