import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </>
  )
}

export default App
