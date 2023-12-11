import Carousel from '../components/Carousel'
import Filter from '../components/Filter'
import ListItems from '../components/ListItems'

function Home() {
  return (
    <>
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
        <li className='min-w-full p-3'>
          <article className='dark:bg-dark-light rounded-md p-4 h-44 flex flex-col justify-between'>
            <h3 className='text-2xl font-medium'>Artículos nuevos 1</h3>
            <p className='dark:text-dark-300 font-normal'>
              Revisa los productos recién llegados
            </p>
          </article>
        </li>
      </Carousel>
      <Filter />
      <ListItems />
    </>
  )
}

export default Home
