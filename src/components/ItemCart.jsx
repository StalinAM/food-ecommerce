function ItemCart() {
  return (
    <>
      <article className='p-3 dark:bg-dark-light rounded-md flex flex-col gap-3'>
        <img
          className='w-44'
          src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
          alt=''
        />
        <div>
          <header>
            <h3 className='font-medium dark:text-slate-100 text-sm mb-1'>
              Pizza de piña
            </h3>
          </header>
        </div>
      </article>
      <div className='p-3 dark:bg-dark-light rounded-md flex justify-between'>
        <div className='flex flex-col leading-5 dark:text-slate-100 font-bold text-lg'>
          <span className='text-xs dark:text-slate-100/60 font-normal'>
            $20.00
          </span>
          <span>$15.00</span>
        </div>
        <div className='flex gap-2 items-center border rounded-md px-1'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
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
          <span>00</span>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
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
      </div>
    </>
  )
}

export default ItemCart
