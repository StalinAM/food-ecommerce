import { Adjustments } from '../assets/icons/Icons'
import Categories from './Categories'

function Filter() {
  return (
    <section className='flex flex-col gap-4'>
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
      <Categories />
    </section>
  )
}

export default Filter
