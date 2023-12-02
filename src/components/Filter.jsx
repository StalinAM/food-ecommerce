function Filter() {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex gap-4 w-full justify-between items-center'>
        <div className='w-full relative'>
          <svg
            className='absolute top-[7px] left-2 text-dark-300'
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
            <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
            <path d='M21 21l-6 -6' />
          </svg>
          <input
            className='w-full focus-visible:outline-none rounded-md pr-2 pl-8 py-1 bg-gray-50 dark:bg-dark-light text-slate-900 dark:text-slate-100 placeholder:text-dark-300'
            type='text'
            placeholder='Buscar'
          />
        </div>
        <button className='bg-dark-light rounded-md p-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M4 6l8 0' />
            <path d='M16 6l4 0' />
            <path d='M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M4 12l2 0' />
            <path d='M10 12l10 0' />
            <path d='M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M4 18l11 0' />
            <path d='M19 18l1 0' />
          </svg>
        </button>
      </div>
      <ul className='text-sm'>
        <li>Anime</li>
        <li>Lettering</li>
        <li>Videojuegos</li>
      </ul>
    </section>
  )
}

export default Filter
