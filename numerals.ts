const input = document.querySelector<HTMLInputElement>('#number-input')
const output = document.querySelector<HTMLHeadingElement>("#output")

const convertToRomNum = (input: number): string => {
    const arrayInput = String(input).split('')
    const numArray = arrayInput.map((num) => {
        return Number(num)
    })
    console.log(numArray)
    //apply conversion for each digit depending on position within digit



// Try for single digit only
    let output: string = ""
    switch (input) {
        case 1 :
            output += "I"
            break
        case 2:
            output += "II"
            break
        case 3:
            output += "III"
            break
        case 4:
            output += "IV"
            break
        case 5:
            output+= "V"
            break
        case 6:
            output += "VI"
            break
        case 7:
            output += "VII"
            break
        case 8:
            output += "VIII"
            break
        case 9:
            output += "IX"
            break
    }
    return output
}

const arr = {age: 34, name: 'bleh'}
const {age} = arr
console.log(age)

input.addEventListener("input", (event: Event): void => {
    event.preventDefault()
    const input: HTMLInputElement = event.target as HTMLInputElement
    output.innerHTML = convertToRomNum(Number(input.value))
})
