const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerHTML = textNode.text;
   while (optionButtonsElement.firstChild){
       optionButtonsElement.removeChild(optionButtonsElement.firstChild)
   }
   textNode.options.forEach(option => {
       if (showOption(option)) {
           const button = document.createElement('button')
           button.innerText = option.text
           button.classList.add('btn')
           button.addEventListener('click', () => selectOption(option))
           optionButtonsElement.appendChild(button)
       }

   })
}

function showOption(option) {
    return true;
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: "A body has been found in the town library and the chief wants you to solve the case. Are you up for it, detective?",
        options: [
            {
                text: "I'm up for it.",
                setState: { takeCase: true },
                nextText: 2
            },
            {
                text: "I'll pass on this case",
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame();