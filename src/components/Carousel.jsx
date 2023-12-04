import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from '../assets/icons/Icons'
function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(() => {
      setCurr((prevCurr) => (prevCurr === slides.length - 1 ? 0 : prevCurr + 1))
    }, autoSlideInterval)

    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, slides.length])

  return (
    <div className='overflow-hidden relative'>
      <ul
        className='flex transition-transform ease-out duration-500 w-full'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </ul>
      <div className='absolute -inset-2 flex items-center justify-between'>
        <button
          onClick={prev}
          className=' rounded-full dark:text-slate-400 dark:hover:text-white'
        >
          <ArrowLeft size='24' />
        </button>
        <button
          onClick={next}
          className=' rounded-full dark:text-slate-400 dark:hover:text-white'
        >
          <ArrowRight size='24' />
        </button>
      </div>

      <div className='absolute bottom-0 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides?.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? 'w-5' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
