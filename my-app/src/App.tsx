import {useEffect, useState} from 'react';
import './index.css';
import { playGame, RockPaperScissors } from './uitls/Game';
import Play from './components/Play';
import Result from './components/Result';
import ReactModal from 'react-modal'


ReactModal.setAppElement('body');

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}


function App() {
  const [result, setResult] = useState<string[] | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [score,setScore] = useState(0)
  const [total,setTotal] = useState(0)
  const [modal, setModal] = useState(false)
  
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  const handlePlay = (item:RockPaperScissors) => {
      const gameResult = playGame(item)
      setResult(gameResult)
      setGameOver(true)
      setTotal((prevTotal) => prevTotal + 1)
  }
 
  const playAgain = () => {
    setGameOver(false)
    setResult(null)
  }

    useEffect(() => {
      console.log('rendered')
    const savedScore = localStorage.getItem('score');
    const savedTotal = localStorage.getItem('total');

    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }

    if (savedTotal) {
      setTotal(parseInt(savedTotal, 10));
    }
  }, []); // Empty dependency array ensures it runs only on mount

  // Save score and total to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem('total', total.toString());
  }, [total]);
  console.log('rendered consoles')

  return (
    <div className="min-h-screen py-11 md:px-[10rem] lg:px-[15rem] xl:px-[29rem] px-14 flex flex-col items-center">
      <div className='border-2 w-full p-5 rounded-md flex mb-[5rem]
       justify-between items-center border-gray-400'>
        <div className=''>
          <p className='text-white text-[1.35rem] md:text-[2rem]'>ROCK</p>
          <p className='text-white text-[1.35rem] md:text-[2rem]'>PAPER</p>
          <p className='text-white text-[1.35rem] md:text-[2rem]'>SCISSORS</p>
        </div>
        <div className='rounded-md leading-6 bg-white px-5 py-3 md:px-7 md:py-5 text-center'>
          <p className='text-[.85rem] -tracking-tighter uppercase text-blue-700'>score</p>
          <p className='text-[2.3rem] font-bold  text-gray-500'>{score}</p>
        </div>
      </div>
      {/* game begins */}
      <p className='text-white text-[1.5rem] tracking-widest md:text-[2.5rem] mb-6'>TOTAL GAMES PLAYED: {total}</p>
      {!gameOver ? <Play handlePlay={handlePlay} /> : null}
      {gameOver ? <Result result={result} playAgain={playAgain} setScore={setScore} /> : null}
      <ReactModal 
      isOpen={modal}
      style={modalStyles} 
      onRequestClose={closeModal} 
      contentLabel='Pizza Modal'
      className='bg-white w-full h-full lg:max-w-[500px] lg:max-h-[500px] lg:rounded-[30px]
      lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none  '
    
      >
        <div 
          className='p-8'
        >
          <div className='flex justify-between mb-8'>
            <p className='text-[2.5rem] text-zinc-800'>RULES</p>
            <p  
            className='cursor-pointer text-[1.5rem] font-bold text-zinc-600'
            onClick={closeModal}>X</p>
          </div>
          <div className='flex flex-col relative'>
        
          <img className='absolute left-14 top-8 ' src={'./images/image-rules.svg'} />
      </div>
        </div>  
      </ReactModal>
      <button 
      onClick={openModal}
      className='mt-20 tracking-[.3rem] md:self-end transform hover:scale-105 rounded-md text-white border px-8 py-4'>RULES</button>
    </div>
  );
}

export default App;
