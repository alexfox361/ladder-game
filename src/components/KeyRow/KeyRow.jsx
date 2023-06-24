import Key from "../Key/Key";

export default function KeyRow(props) {

    return (
        <>
            <div className="flex justify-center m-[25px]">
                <div className="flex">
                    {props.KeyRow.split('').map((letter, index) => (
                        <Key Letter={letter} key={index} 
                        WordArray={props.WordArray} SetWordArray={props.SetWordArray} 
                        KeyBoardHighlight={props.KeyBoardHighlight} SetKeyboardHighlight={props.SetKeyboardHighlight} 
                        CurrentGuess={props.CurrentGuess} SetCurrentGuess={props.SetCurrentGuess} />
                    ))}
                </div>
            </div> 
        </>
    ) 
}