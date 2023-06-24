import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import Navbar from './components/navbar/navbar'
import Word from './components/Word/Word'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  
  const[wordArray, setWordArray] = useState(["roll", "goal"]);
  const[keyboardHighlight, setKeyboardHighlight] = useState(false);
  const[currentGuess, setCurrentGuess] = useState(0);

  return (
    <>
    
      <Navbar />
      <div className="flex flex-col justify-between h-[1320px] m-[25px]">
        <Board WordArray={wordArray} SetWordArray={setWordArray} KeyBoardHighlight={keyboardHighlight} SetKeyboardHighlight={setKeyboardHighlight} CurrentGuess={currentGuess} SetCurrentGuess={setCurrentGuess} />
        <Keyboard WordArray={wordArray} SetWordArray={setWordArray} KeyBoardHighlight={keyboardHighlight} SetKeyboardHighlight={setKeyboardHighlight} CurrentGuess={currentGuess} SetCurrentGuess={setCurrentGuess} />
      </div>


  </>
  )
}

export default App
