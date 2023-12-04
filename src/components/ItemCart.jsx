import { Delete, Minus, Plus } from '../assets/icons/Icons'

function ItemCart() {
  return (
    <>
      <article className='p-3 dark:bg-dark-light rounded-md flex gap-2'>
        <img
          className='w-36'
          src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
          alt=''
        />
        <div>
          <header>
            <h3 className='font-medium dark:text-slate-100 mb-1'>
              Pizza de piña
            </h3>
          </header>
          <ul>
            <li>
              <span className='dark:text-slate-100/60 mr-4 text-sm'>
                Cantidad:
              </span>
              <span className='font-medium text-slate-100'>10</span>
            </li>
            <li>
              <span className='dark:text-slate-100/60 mr-4 text-sm'>
                Precio c/u:
              </span>
              <span className='font-medium text-slate-100'>$15.00</span>
            </li>
          </ul>
        </div>
      </article>
      <div className='p-3 dark:bg-dark-light rounded-md flex justify-between'>
        <div className='flex flex-col leading-5 dark:text-slate-100 font-bold text-lg'>
          <span className='text-xs dark:text-slate-100/60 font-normal'>
            Precio total
          </span>
          <span>$15.00</span>
        </div>
        <div className='flex gap-2'>
          <div className='flex gap-4 items-center border-[1px] rounded-md px-2'>
            <button className='dark:hover:text-slate-50'>
              <Minus size='20' />
            </button>
            <span className='text-lg dark:text-slate-50 font-medium'>10</span>
            <button className='dark:hover:text-slate-50'>
              <Plus size='20' />
            </button>
          </div>
          <button className='dark:text-slate-100/50 hover:dark:text-slate-100'>
            <Delete size='26' />
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemCart
