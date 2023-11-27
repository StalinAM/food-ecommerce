function Item() {
  return (
    <article className='p-3 dark:bg-dark-light rounded-md relative overflow-hidden flex flex-col gap-2'>
      <img
        src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
        alt=''
      />
      <header>
        <h3 className='font-medium dark:text-slate-100 text-sm'>
          Pizza de piña
        </h3>
      </header>
      <div className='flex flex-col leading-5 dark:text-slate-100 font-bold text-lg'>
        <span className='text-sm dark:text-slate-100/60 font-normal'>
          20,00 $
        </span>
        <span>15,00 $</span>
      </div>
      <button className='absolute dark:bg-slate-50 rounded-tl-md bottom-0 right-0 w-10 h-10'>
        <svg
          className='m-auto dark:text-dark-300'
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
          <path d='M12 5l0 14' />
          <path d='M5 12l14 0' />
        </svg>
      </button>
    </article>
  )
}

export default Item
