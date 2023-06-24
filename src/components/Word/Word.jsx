import Tile from "../Tile/Tile";

export default function Word(props) {

    return (
        <>
            <div className={`flex justify-center m-[25px] ${props.Highlighted == true ? 'bg-green-600' : ''}`}>
                <div className="flex" id={props.Word}>
                    {props.Word.split('').map((letter, index) => (
                        <Tile Letter={letter} ID={props.Word + index} key={index} 
                        WordArray={props.WordArray} SetWordArray={props.SetWordArray} 
                        KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} 
                        CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />
                    ))}
                </div>
            </div> 
        </>
    ) 
}