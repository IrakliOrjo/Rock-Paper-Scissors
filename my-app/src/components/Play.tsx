import React from 'react'

type PlayProps = {
  handlePlay: (move: 'paper' | 'scissors' | 'rock') => void;
};

const Play: React.FC<PlayProps> = ({ handlePlay }) => {
  return (
    <div className='flex flex-col relative'>
        <div className='flex gap-28'>
          <div 
          className='rounded-full cursor-pointer drop-shadow-2xl p-4 transform 
          hover:scale-105 transition-transform bg-paper-0'
          onClick={() => handlePlay('paper')}
          >
            <div className='rounded-full drop-shadow-2xl bg-white p-7'>
              <img src={'./images/icon-paper.svg'} />
            </div>
          </div>
        <div 
        className='rounded-full cursor-pointer drop-shadow-2xl 
        p-4 transform hover:scale-105 transition-transform bg-scissors-0'
        onClick={() => handlePlay('scissors')}
        >
            <div className='rounded-full drop-shadow-2xl bg-white p-7'>
              <img src={'./images/icon-scissors.svg'} />
            </div>
          </div>
        </div>
        <div 
        className='rounded-full cursor-pointer mt-14 mx-auto drop-shadow-2xl p-4 
        transform hover:scale-105 transition-transform bg-rock-0'
        onClick={() => handlePlay('rock')}
        >
            <div className='rounded-full drop-shadow-2xl bg-white p-7'>
              <img src={'./images/icon-rock.svg'} />
            </div>
          </div>
          <img className='absolute left-5 top-8 -z-10' src={'./images/bg-triangle.svg'} />
      </div>
  )
}

export default Play