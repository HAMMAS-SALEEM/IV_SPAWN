import { React, useEffect, useState } from 'react'
import { table } from './tables'
const option = () => {
  const [visible, setvisible] = useState(true)
  const [options, setoptions] = useState([])
  const [counter, setcounter] = useState(0)

  const tableCount = table.length*150

  const incCount = () => {
    console.log('working')
    setcounter(prev => prev + 1)
    console.log(counter)
  }
  const decCount = () => setcounter(prev => prev - 1)

  useEffect(() => {
    const handlekey = e => {
      if (visible) {
        if (e.keyCode === 39 && counter < table.length - 1) {
          setcounter(counter + 1)
        } else if (e.keyCode === 37 && counter != 0) {
          setcounter(counter - 1)
        }
      }
    }

    window.addEventListener('keydown', handlekey)
    return () => window.removeEventListener('keydown', handlekey)
  })

  return (
    <>
      <div className='option-wrapper'>
        <div className='option-header'>CHOOOSE YOUR LOCATION</div>
        <div className='option-container'>
          <button type='button' className='arrow z-10' onClick={decCount}>
            &lt;
          </button>

          <div className='flex justify-center items-cente w-[450px]'>
            <ul
              style={{width: tableCount, transform: `translateX(${150*counter}px)`, transition: 'all ease-in-out 250ms'}} 
              className={`flex justify-center items-center ml-[80px]`}>
              {table.map((c, i) => (
                <li key={c + i} className='w-[150px] text-white text-xl text-center'>
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <button type='button' className='arrow z-10' onClick={incCount}>
            &gt;
          </button>
        </div>
      </div>

      <div className='buttons'>
        <div className='button'>
          <div className='button-key'>ENTER</div>
          <span className='button-action'>Confirm</span>
        </div>

        <div className='button'>
          <div className='button-key'>ESC</div>
          <span className='button-action'>Back</span>
        </div>
      </div>
    </>
  )
}

export default option

// Get length of first name
// On pressing right move the whole part by length of first name
