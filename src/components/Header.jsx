function Header({ activeMenu, setActiveMenu }) {
  const ITEMS = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Delivery' },
    { id: 3, name: 'Locations' },
    { id: 4, name: 'Contact' }
  ]
  const handleClick = () => {
    setActiveMenu(!activeMenu)
    console.log(activeMenu)
  }
  return (
    <header className='p-4 relative flex justify-between items-center'>
      <span className='text-xl'>PIZZA'S</span>
      <button
        className={`${
          activeMenu ? 'absolute right-[calc(50%+22px)]' : 'block'
        } hover:text-slate-50`}
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
        } absolute w-1/2 bg-dark-light right-4 top-4 rounded-md transition-all`}
      >
        <ul className='flex flex-col gap-5 items-center p-4'>
          {ITEMS.map(({ id, name }) => (
            <li className='cursor-pointer hover:text-slate-50' key={id}>
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
