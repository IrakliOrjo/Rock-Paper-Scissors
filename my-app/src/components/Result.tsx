import React, { useEffect } from 'react'

type Result = {
    result: string[] | null
    playAgain: () => void;
     setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Result: React.FC<Result> = ({ result, playAgain, setScore }) => {

    useEffect(() => {
    // Set a small delay before fading in the result
    const timeoutId = setTimeout(() => {
        console.log('ran')
      document.getElementById('result-container')?.classList.remove('opacity-10');
      document.getElementById('img-result-container')?.classList.remove('opacity-0');
      
      
      
    }, 500);

     // Another delay for a different action
  const timeoutId2 = setTimeout(() => {
    document.getElementById('play-again')?.classList.remove('opacity-0');
    document.getElementById('blur')?.classList.remove('opacity-0');
    if (result && result[0] === 'win') {
      setScore((prevScore) => prevScore + 1);
    }
  }, 1500);

  // Cleanup function to clear timeouts when the component unmounts or dependencies change
  return () => {
    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);
  };
  }, []);

     if (result === null ) {
    // Handle the case where result is null or doesn't have enough elements
    return (
      <div className='flex flex-col relative'>
        {/* Render a fallback UI or a message */}
        <p>No result available.</p>
      </div>
    );
  }

  return (
    <div 
    
     className="flex flex-col relative  ">
        <div className='flex justify-between gap-28'>
            <div className='flex flex-col'>
                
                 <div 
                 className={`rounded-full relative cursor-pointer drop-shadow-2xl p-4 transform 
                 hover:scale-105 transition-transform bg-${result[2]}-0`}

                 >
                   <div className='rounded-full drop-shadow-2xl  bg-white p-7'>
                    <img className='' src={`./images/icon-${result[2]}.svg`} />
                  </div>
                </div>
                <div
                id='blur' 
                className='absolute opacity-0 top-0 blur-2xl bg-white w-[140px] h-[140px] -z-10'></div>
                <p className='mt-6  ml-5 text-white tracking-wider text-[1.2rem]'>YOU PICKED</p>
            </div>
            <div className='flex flex-col'>
               
                <div 
                    id="result-container"
                    className={`rounded-full relative opacity-10  transition-opacity ease-in-out duration-500 cursor-pointer drop-shadow-2xl self-center
                    p-4 transform hover:scale-105  bg-${result[1]}-0`}

                    >
                       <div className='rounded-full drop-shadow-2xl bg-white p-7'>
                         <img 
                         id="img-result-container"
                         className='opacity-0 transition-opacity ease-in-out duration-500'
                         src={`./images/icon-${result[1]}.svg`} />
                       </div>
                </div>
                
                    <p className='mt-6  text-white tracking-wider text-[1.2rem]'>THE HOUSE PICKED</p>
          </div>
        </div>
        <div
            id='play-again'
            className='flex flex-col mt-11 justify-center items-center opacity-0'
        >
            <p className='text-white mb-4 uppercase tracking-widest text-[3.5rem]'
            >{result[0] === 'win' ? 'you win' : result[0] === 'lose' ? 'you lose' : 'draw'}
            </p>
            <button className='px-20 py-4 text-[1.3rem] uppercase 
            tracking-widest bg-white hover:bg-[#ebeaea] rounded-md'
            onClick={playAgain}
            >PLAY AGAIN</button>
        </div>
      </div>
  )
}

export default Result