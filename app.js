

const calcData = [
    { id:"clear", value:"AC", class:"AC"},
    { id:"divide", value:"/", class:"div"},
    { id:"multiply", value:"x", class:"times"},
    { id:"seven", value: 7, class:"seven" }, 
    { id:"eight", value: 8 , class:"eight"},
    { id:"nine", value: 9, class: "nine"},
    { id:"subtract", value:"-", class:"minus"},
    { id:"four", value: 4, class: "four"},
    { id:"five", value: 5, class: "five"},
    { id:"six", value: 6, class: "six"},
    { id:"add", value:"+", class:"plus"},
    { id:"one", value: 1, class:"one" },
    { id:"two", value: 2, class: "two"},
    { id:"three", value: 3, class: "three"},
    { id:"equals", value:"=", class:"equals"},
    { id:"zero", value: 0, class: "zero"},
    { id:"decimal", value:".", class:"dot"},
];

const operators = ["AC", "/", "x", "+", "-", "="];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Display = ({input, output}) => (
<div class="output">
    <span class="result">{output}</span>
    <span id="display" class="input">{input}</span>
</div> 
);

const Key = ({keyData: {id, value}, handleInput }) => (
    <button id={id} onClick={() => handleInput(value)}>
    {value}
    </button>
);

const Keyboard = ({handleInput}) => (
    <div class="keys">{calcData.map((key) => (
        <Key key={key.id} keyData ={key} handleInput ={handleInput} />
    ))}
    </div>
) 

function App () {
    const [input, setInput] = React.useState("0");
    const [output, setoutput] = React.useState("1")
    const handleInput = () => {}
    return (
        <div class ="container">
            <div class ="calculator"> 
                <Display input={input} output={output}/>
                <Keyboard handleInput={handleInput}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));