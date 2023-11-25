function Header({ activeMenu, setActiveMenu }) {
  const ITEMS = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Delivery' },
    { id: 3, name: 'Locations' },
    { id: 4, name: 'Contact' }
  ]
  const handleClick = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <header className='p-4 relative flex justify-between items-center '>
      <span className='text-xl text-slate-50 font-medium'>PIZZA'S</span>
      <button
        className={`${
          activeMenu ? '-translate-x-[calc(50vw-8px)]  z-30' : 'block'
        } hover:text-dark hover:bg-slate-200 rounded transition-all`}
        onClick={handleClick}
      >
        {activeMenu ? (
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
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
          </svg>
        ) : (
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
            <path d='M4 6l16 0' />
            <path d='M4 12l16 0' />
            <path d='M4 18l16 0' />
          </svg>
        )}
      </button>
      <nav
        className={`${
          activeMenu ? 'block' : 'translate-x-[calc(100%+30px)]'
        } absolute w-1/2 bg-dark-light top-0 right-0 rounded-l-md transition-all h-screen z-20`}
      >
        <ul className='flex flex-col gap-3 items-start p-4'>
          {ITEMS.map(({ id, name }) => (
            <li
              className=' w-full cursor-pointer hover:text-dark px-3 py-1 hover:bg-slate-200 rounded'
              onClick={handleClick}
              key={id}
            >
              {name}
            </li>
          ))}
        </ul>
        <div
          onClick={handleClick}
          className={`${
            activeMenu ? '-translate-x-full' : 'translate-x-full'
          } top-0 absolute backdrop-blur-[1.5px] w-full h-full`}
        ></div>
      </nav>
    </header>
  )
}

export default Header
