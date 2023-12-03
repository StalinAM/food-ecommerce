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
          <div className='flex gap-4 items-center border-2 rounded-md px-2'>
            <button className='dark:hover:text-slate-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l14 0' />
              </svg>
            </button>
            <span className='text-lg dark:text-slate-50 font-medium'>10</span>
            <button className='dark:hover:text-slate-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 5l0 14' />
                <path d='M5 12l14 0' />
              </svg>
            </button>
          </div>
          <button className='dark:text-dark-300 hover:dark:text-slate-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 7l16 0' />
              <path d='M10 11l0 6' />
              <path d='M14 11l0 6' />
              <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
              <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemCart
