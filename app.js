const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerText = textNode.text
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: "A body has been found at the library and the chief wants you to solve the case. Are you up for it, detective?",
        options: [
            {
                text: "I'm up for it.",
                setState: {
                    takeCase: true
                    },
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