import { React, useEffect, useState } from 'react'
import { table } from './tables'
const option = () => {
  const [visible, setvisible] = useState(true)
  const [counter, setcounter] = useState(0)

  const tableCount = table.length * 150

  const incCount = () => setcounter(prev => prev + 1)
  const decCount = () => setcounter(prev => prev - 1)

  const setLoc = () => {
    let name = 0;
    if(counter == 1) {
      name = 0
    } else if (counter == 0) {
      name = 1
    } else {
      name = (counter*-1)+1
    }
    console.log(table[name].name)
  }

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
          <button
            type='button'
            className='arrow z-10 bg-black w-[50px] rounded-[50%] border'
            onClick={decCount}
            disabled={table.length - 2 === Math.abs(counter) && true}
          >
            Q
          </button>
          <div className='w-[450px]'>
            <li
              style={{ left: '208px' }}
              className={`w-[150px] h-[56px] bg-yellow-500 absolute rounded`}
            />
            <ul
              style={{
                width: tableCount,
                transform: `translateX(${150 * counter + counter * 0.3}px)`,
                transition: 'all ease-in-out 250ms'
              }}
              className={`flex justify-center items-center gap-2`}
            >
              {table.map((c, i) => (
                <li
                  key={c + i}
                  className={`w-full text-white text-lg text-center z-10`}
                >
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <button
            type='button'
            className='arrow z-10 bg-black w-[50px] rounded-[50%] border'
            onClick={incCount}
            disabled={counter === 1 && true}
          >
            E
          </button>
        </div>
      </div>

      <div className='buttons'>
        <div className='button'>
          <button type='button' onClick={setLoc} className='button-key'>ENTER</button>
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
