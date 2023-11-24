function Filter() {
  return (
    <section className='flex gap-4'>
      <input type='text' />
      <button className='bg-dark-light p-1 rounded'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
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
    </section>
  )
}

export default Filter
