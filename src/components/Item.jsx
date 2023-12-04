import { Plus } from '../assets/icons/Icons'

function Item() {
  return (
    <article className='p-3 dark:bg-dark-light rounded-md relative overflow-hidden flex flex-col gap-3'>
      <img
        src='https://the-weirdos.netlify.app/static/media/bighead-3.ee360106bab5dce5e9d68a2a0ea516ad.svg'
        alt=''
      />
      <div>
        <header>
          <h3 className='font-medium dark:text-slate-100 text-sm mb-1'>
            Pizza de piña
          </h3>
        </header>
        <div className='flex flex-col leading-6 dark:text-slate-100 font-bold text-lg'>
          <span className='text-xs dark:text-slate-100/60 font-normal'>
            $20.00
          </span>
          <span>$15.00</span>
        </div>
      </div>
      <button className='absolute border dark:bg-slate-50 rounded-tl-md rounded-br-md bottom-0 right-0 w-10 h-10 dark:text-dark-light flex justify-center items-center dark:hover:bg-transparent dark:hover:text-slate-100'>
        <Plus size='28' />
      </button>
    </article>
  )
}

export default Item
