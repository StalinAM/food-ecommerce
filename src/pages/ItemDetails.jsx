import { ArrowLeft } from '../assets/icons/Icons'
import Carousel from '../components/Carousel'

function ItemDetails() {
  return (
    <section className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <button>
          <ArrowLeft size='22' />
        </button>
        <h3 className='text-sm'>Detalles del producto</h3>
      </div>
      <Carousel>
        <li className='min-w-full p-3'>
          <div className='dark:bg-dark-light rounded-md w-full'>
            <img
              className='w-40 m-auto'
              src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
              alt=''
            />
          </div>
        </li>
        <li className='min-w-full p-3'>
          <div className='dark:bg-dark-light rounded-md w-full'>
            <img
              className='w-40 mx-auto'
              src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
              alt=''
            />
          </div>
        </li>
        <li className='min-w-full p-3'>
          <div className='dark:bg-dark-light rounded-md w-full'>
            <img
              className='w-40 mx-auto'
              src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
              alt=''
            />
          </div>
        </li>
      </Carousel>
      <button className='border-[1px] dark:hover:bg-transparent dark:hover:text-slate-100 dark:bg-slate-100 dark:text-dark text-lg font-medium rounded-md py-1'>
        Añadir carrito
      </button>
    </section>
  )
}

export default ItemDetails
