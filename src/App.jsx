import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Carousel from './components/Carousel'
import ListItems from './components/ListItems'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className='px-4 pt-2 pb-4 w-full flex flex-col gap-6'>
        <Filter />
        <Carousel>
          <li className='min-w-full p-3'>
            <article className='dark:bg-dark-light rounded-md p-4 h-44 flex flex-col justify-between'>
              <h3 className='text-2xl font-medium'>Artículos nuevos 1</h3>
              <p className='dark:text-dark-300 font-normal'>
                Revisa los productos recién llegados
              </p>
            </article>
          </li>
          <li className='min-w-full p-3'>
            <article className='dark:bg-dark-light rounded-md p-4 h-44 flex flex-col justify-between'>
              <h3 className='text-2xl font-medium'>Artículos nuevos 1</h3>
              <p className='dark:text-dark-300 font-normal'>
                Revisa los productos recién llegados
              </p>
            </article>
          </li>
          <li className='min-w-full p-3'>
            <article className='dark:bg-dark-light rounded-md p-4 h-44 flex flex-col justify-between'>
              <h3 className='text-2xl font-medium'>Artículos nuevos 1</h3>
              <p className='dark:text-dark-300 font-normal'>
                Revisa los productos recién llegados
              </p>
            </article>
          </li>
        </Carousel>
        <ListItems />
      </main>
    </>
  )
}

export default App
