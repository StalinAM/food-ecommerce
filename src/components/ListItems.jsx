import Item from './Item'

function ListItems() {
  return (
    <section className='flex flex-col gap-2'>
      <header className='flex justify-between items-center'>
        <h2 className='dark:text-slate-100 font-medium'>Productos</h2>
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
      <ul className='grid grid-cols-2 gap-4'>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </section>
  )
}

export default ListItems
