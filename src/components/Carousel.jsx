import { useEffect, useState } from 'react'
function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}) {
  const [curr, setCurr] = useState(0)
  console.log(slides)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className='overflow-hidden relative'>
      <ul
        className='flex transition-transform ease-out duration-500 w-full'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </ul>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M15 6l-6 6l6 6' />
          </svg>
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 6l6 6l-6 6' />
          </svg>
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides?.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
