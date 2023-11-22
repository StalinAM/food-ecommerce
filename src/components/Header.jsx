function Header() {
  const ITEMS = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Delivery' },
    { id: 3, name: 'Locations' },
    { id: 4, name: 'Contact' }
  ]
  return (
    <header className=''>
      <nav>
        <ul>
          {ITEMS.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
