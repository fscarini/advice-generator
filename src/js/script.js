const diceButton = document.getElementById('dice-button')
diceButton.addEventListener("click", () =>{
    showAdvice()
})

async function generateAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function showAdvice(){
    const setAdvice = await generateAdvice()
    const adviceId = setAdvice.slip.id
    const advice = setAdvice.slip.advice
    document.getElementById('advice-number').innerHTML = `ADVICE #${adviceId}`
    document.getElementById('advice').innerHTML = `"${advice}"`
}

showAdvice()