export default function Key(props) {

    function handleClick() {

        if (props.KeyBoardHighlight == true) {

            const targetElement = event.target;
            const wordIndex = props.WordArray.length - 2;
            const guessWord = (props.WordArray[wordIndex].replace(" ", targetElement.textContent))
            const lastIndex = props.WordArray.length - 1;

            if (guessWord == props.WordArray[props.WordArray.length - 1]) {
                const winArray = [
                    ...props.WordArray.slice(0, wordIndex),
                    props.WordArray[lastIndex]
                ];
                props.SetWordArray(winArray);
                props.SetKeyboardHighlight(false);
                props.SetCurrentGuess(winArray.length - 1);
            }
            else {
                const newWordArray = [
                    ...props.WordArray.slice(0, wordIndex), 
                    guessWord,
                    props.WordArray[lastIndex]
                ];
                props.SetWordArray(newWordArray);
                props.SetKeyboardHighlight(false);
            }
        }
    }

    return (
        <>
            <button onClick={handleClick} className={`flex justify-center items-center h-[80px] w-[80px] border-[1px]  hover:scale-110 bg-black text-[36px] uppercase 
                                                      ${props.KeyBoardHighlight == true ? 'text-white border-white' : 'text-gray-400 border-gray-400'}`}>
                {props.Letter}
            </button>
        </> 
    )
}