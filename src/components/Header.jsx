import { Link } from 'react-router-dom'
import { Burger, Cart, Close } from '../assets/icons/Icons'

function Header({ activeMenu, setActiveMenu }) {
  const ITEMS = [
    { id: 1, name: 'About', path: '/' },
    { id: 2, name: 'Delivery', path: '/' },
    { id: 3, name: 'Locations' },
    { id: 4, name: 'Contact' }
  ]
  const handleClick = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <header className='p-4 relative flex justify-between items-center '>
      <Link to='/' className='text-xl text-slate-50 font-medium'>
        PIZZA'S
      </Link>
      <div className='flex gap-4'>
        <Link to='shopping-cart' className='relative'>
          <Cart size='24' />
          <div className='flex items-center absolute w-5 h-5 -top-1 -right-1.5 dark:bg-dark-light rounded-full text-xs font-medium text-slate-50'>
            <span className='m-auto'>0</span>
          </div>
        </Link>
        <button
          className={`${
            activeMenu ? '-translate-x-[200px] fixed z-30' : 'block'
          } hover:text-dark hover:bg-slate-200 rounded-md transition-[transform]`}
          onClick={handleClick}
        >
          {activeMenu ? <Close size='28' /> : <Burger size='28' />}
        </button>
      </div>
      <nav
        className={`${
          activeMenu ? 'block' : 'translate-x-[calc(100%+30px)]'
        } fixed w-52 bg-dark-light top-0 right-0 rounded-l-md transition-all h-screen z-20`}
      >
        <ul className='flex flex-col gap-3 items-start p-4'>
          {ITEMS.map(({ id, name }) => (
            <li
              className=' w-full cursor-pointer hover:text-dark px-3 py-1 hover:bg-slate-200 rounded-md'
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
          } top-0 absolute backdrop-blur-[1.5px] w-screen h-full`}
        ></div>
      </nav>
    </header>
  )
}

export default Header
