function Categories() {
  return (
    <form>
      <h2 className='mb-3'>Categories</h2>
      <div className='flex gap-3'>
        <label className='cursor-pointer'>
          <input type='radio' className='hidden peer' name='category' />
          <span className='px-2 py-1 text-sm rounded-md border border-dark-light bg-dark-light peer-checked:border-slate-50 peer-checked:font-medium'>
            Todos
          </span>
        </label>
        <label className='cursor-pointer'>
          <input type='radio' className='hidden peer' name='category' />
          <span className='px-2 py-1 text-sm rounded-md border border-dark-light bg-dark-light peer-checked:border-slate-50 peer-checked:font-medium'>
            Lettering
          </span>
        </label>
        <label className='cursor-pointer'>
          <input type='radio' className='hidden peer' name='category' />
          <span className='px-2 py-1 text-sm rounded-md border border-dark-light bg-dark-light peer-checked:border-slate-50 peer-checked:font-medium'>
            Games
          </span>
        </label>
        <label className='cursor-pointer'>
          <input type='radio' className='hidden peer' name='category' />
          <span className='px-2 py-1 text-sm rounded-md border border-dark-light bg-dark-light peer-checked:border-slate-50 peer-checked:font-medium'>
            Anime
          </span>
        </label>
      </div>
    </form>
  )
}

export default Categories
