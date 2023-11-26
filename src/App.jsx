import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Item from './components/Item'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className='px-4 pt-2 pb-4 w-full flex flex-col gap-6'>
        <Filter />
        <section className='flex flex-col gap-2'>
          <header className='flex justify-between items-center'>
            <h2 className='text-slate-100 font-medium'>Productos</h2>
            <button className='flex items-center text-sm'>
              <span>Ver mas</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 6l6 6l-6 6' />
              </svg>
            </button>
          </header>
          <ul>
            <li>
              <Item />
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
