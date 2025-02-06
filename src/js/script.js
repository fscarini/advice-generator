showAdvice()

const diceButton = document.getElementById('dice-button')
diceButton.addEventListener("click", () =>{
    showAdvice()
})

async function generateAdvice(){
    const url = "https://api.adviceslip.com/advice"
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as infroamções da API!")
        }

        const data = await response.json()
        return data

    }catch (error){
        alert.error("Erro ao tentar buscar as informações da API", error)
    }

}

async function showAdvice(){
    const setAdvice = await generateAdvice()
    const adviceId = setAdvice.slip.id
    const advice = setAdvice.slip.advice
    document.getElementById('advice-number').innerHTML = `ADVICE #${adviceId}`
    document.getElementById('advice').innerHTML = `"${advice}"`
}
