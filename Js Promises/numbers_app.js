
const htmlContent = document.querySelector('div')

let numberFacts = axios.get('http://numbersapi.com/1,5,9')

numberFacts.then((result) => {return result}).then((result) => {
    console.log(typeof(result.data))
    
    for (const num in result.data){
        
        const newP = document.createElement('p')
        newP.innerText = `${result.data[num]}`

        htmlContent.appendChild(newP)
    }
}).catch(() => {console.log('ERROR!')})

let favNumberFacts = [
    axios.get('http://numbersapi.com/42'),
    axios.get('http://numbersapi.com/42'),
    axios.get('http://numbersapi.com/42'),
    axios.get('http://numbersapi.com/42')
]

Promise.all(favNumberFacts).then((facts) => {
    facts.forEach((f) => {
        const newP = document.createElement('p')
        newP.innerText = `${f.data}`

        htmlContent.appendChild(newP)
    })
})