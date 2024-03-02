import { useEffect, useState } from "react";
import contentArray from "./content"

function App() {
  const [ contentIndex, setContentIndex ] = useState(0)
  const [ time, setTime ] = useState(0)
  const [ start, setStart ] = useState(false)

  useEffect(() => {
    if ( start ) {
      setTimeout(() => {
        setTime(time + 1)
        if (time >= 100 && contentIndex < contentArray.length - 1) {
          setContentIndex(contentIndex + 1)
          setTime(0)
        }
      }, 100)
    }
  }, [ time, start ])

  return (
    <div className="h-screen w-full bg-gif-rocket bg-cover bg-center flex justify-center items-center text-purple-100 p-5 sm:p-10">
      <div className="max-w-3xl p-5 sm:p-10 bg-purple-950/75 rounded-xl border border-purple-500 ">
        {start ? (
          <>
            <h1 className="text-3xl sm:text-6xl mb-10 font-semibold">{contentArray[contentIndex].title}</h1>
            <p className="text-lg sm:text-xl">{contentArray[contentIndex].content}</p>
            <progress className="mt-10" id="file" value={time} max="100"></progress>
          </>
        ) : (
          <button 
            className="px-10 py-5 rounded-full bg-purple-800 text-lg font-semibold active:scale-95 transition-2"
            onClick={() => { setStart(true) }}
          >Começar Apresentação</button>
        )}
      </div>
    </div>
  );
}

export default App;
