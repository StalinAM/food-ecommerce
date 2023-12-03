import ItemCart from '../components/ItemCart'

function ShoppingCart() {
  return (
    <section className='flex flex-col gap-4'>
      <h2>Shopping cart</h2>
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
    </section>
  )
}

export default ShoppingCart
