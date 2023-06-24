import KeyRow from "../KeyRow/KeyRow";

export default function Keyboard(props) {

    return (
        <>
            <div className="">
                <KeyRow KeyRow="abcdefg" WordArray={props.WordArray} SetWordArray={props.SetWordArray} KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />    
                <KeyRow KeyRow="hijklmn" WordArray={props.WordArray} SetWordArray={props.SetWordArray} KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />    
                <KeyRow KeyRow="opqrstu" WordArray={props.WordArray} SetWordArray={props.SetWordArray} KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />    
                <KeyRow KeyRow= "vwxyz"  WordArray={props.WordArray} SetWordArray={props.SetWordArray} KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />    
            </div>
        </>
    ) 
}