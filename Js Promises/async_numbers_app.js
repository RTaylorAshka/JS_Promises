
const htmlContent = document.querySelector('div')

async function printNumberFacts(){
    const res = await axios.get('http://numbersapi.com/1,5,9')

    for (const num in res.data) {
        const newP = document.createElement('p')
        newP.innerText = `${res.data[num]}`
        htmlContent.appendChild(newP)
    }
}

async function printFavNumberFacts(){
    let res = await Promise.all([
        axios.get('http://numbersapi.com/42'),
        axios.get('http://numbersapi.com/42'),
        axios.get('http://numbersapi.com/42'),
        axios.get('http://numbersapi.com/42')
    ])

    res.forEach((f) => {
        const newP = document.createElement('p')
        newP.innerText = `${f.data}`

        htmlContent.appendChild(newP)
    })
}

printNumberFacts()
printFavNumberFacts()