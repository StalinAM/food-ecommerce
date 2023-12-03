import ItemCart from '../components/ItemCart'

function ShoppingCart() {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='dark:text-slate-100 font-medium'>Shopping cart</h2>
      <ul>
        <li className='mb-4'>
          <ItemCart />
        </li>
        <li className='mb-4'>
          <ItemCart />
        </li>
        <li className='mb-4'>
          <ItemCart />
        </li>
        <li className='mb-4'>
          <ItemCart />
        </li>
        <li className='mb-4'>
          <ItemCart />
        </li>
      </ul>
      <button className='border-2 dark:hover:bg-transparent dark:hover:text-slate-100 dark:bg-slate-100 dark:text-dark font-medium text-lg rounded-md py-1'>
        Enviar pedido
      </button>
    </section>
  )
}

export default ShoppingCart
