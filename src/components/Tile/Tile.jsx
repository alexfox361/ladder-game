export default function Tile(props) {

    function handleClick() {

        if (props.CurrentGuess == props.WordArray.length - 1) { return }
        
        const parentElement = event.target.parentElement;
        const targetElement = event.target;
        if (parentElement.id.includes(' ')) { return }
        if (parentElement.id == props.WordArray[props.WordArray.length - 1]) { return }

        const selectedIndex = props.WordArray.indexOf(parentElement.id);
        if (selectedIndex > 4) { return } 

        const lastIndex = props.WordArray.length - 1;
        const letterIndex = targetElement.id[targetElement.id.length - 1];

        let guessWord = parentElement.id;
        guessWord = guessWord.substring(0, parseInt(letterIndex)) + " " + guessWord.substring(parseInt(letterIndex) + 1);

        const newWordArray = [
            ...props.WordArray.slice(0, selectedIndex + 1), 
            guessWord,
            props.WordArray[lastIndex]
        ];

        props.SetWordArray(newWordArray);
        props.SetKeyboardHighlight(true);
        props.SetCurrentGuess(selectedIndex + 1);
    }
    
    return (

        <>
            <button onClick={handleClick} id={props.ID} className="flex justify-center items-center h-[80px] w-[80px] border-[1px] hover:scale-110 bg-black text-[36px] uppercase">
                {props.Letter}
            </button>
        </>
    )
}