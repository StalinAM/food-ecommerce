import { ArrowRight } from '../assets/icons/Icons'
import Item from './Item'

function ListItems() {
  return (
    <section className='flex flex-col gap-2'>
      <header className='flex justify-between items-center'>
        <h2 className='dark:text-slate-100 font-medium'>Productos</h2>
        <button className='flex items-center text-sm'>
          <span>Ver mas</span>
          <ArrowRight size='18' />
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
