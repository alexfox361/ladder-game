import Tile from "../Tile/Tile";
import Word from "../Word/Word";

export default function Board(props) {

    return (
        <>
            <div className="">
                {props.WordArray.map((word, index) => (
                    <Word Word={word} key={index} WordArray={props.WordArray} SetWordArray={props.SetWordArray}
                     KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight}
                     CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} 
                     Highlighted={props.CurrentGuess == index ? true : false}/>  
                ))}
            </div>
        </>
    ) 
}