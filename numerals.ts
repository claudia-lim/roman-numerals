const input = document.querySelector<HTMLInputElement>('#number-input')
const output = document.querySelector<HTMLHeadingElement>("#output")

interface Roman {
    single: string,
    five: string,
    ten: string,
    fifty: string,
    hundred: string,
    fiveHundred: string,
    thousand: string
}

const romanNumerals: Roman = {
    single: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    hundred: "C",
    fiveHundred: "D",
    thousand: "M"
}

const convertDigits = (input: number, unitLetter: string = "", fiveUnitLetter: string = "", tenUnitLetter: string = ""): string => {
    switch (input) {
        case 0 :
            return ""
        case 1 :
            return unitLetter
        case 2:
            return unitLetter + unitLetter
        case 3:
            return unitLetter + unitLetter + unitLetter
        case 4:
            return unitLetter + fiveUnitLetter
        case 5:
            return fiveUnitLetter
        case 6:
            return fiveUnitLetter + unitLetter
        case 7:
            return fiveUnitLetter + unitLetter + unitLetter
        case 8:
            return fiveUnitLetter + unitLetter + unitLetter + unitLetter
        case 9:
            return unitLetter + tenUnitLetter
        default:
            return "error"
    }
}

const convertToRomNum = (input: number): string => {
    try {
        if (input > 3000) {
            throw new Error("Max number is 3000")
        }
        if (input < 0) {
            throw new Error("Positive integers only")
        }
        const arrayInput: string[] = String(input).split('')
        const numArray: number[] = arrayInput.map((num) => {
            return Number(num)
        })

        const lengthOfDigit: number = numArray.length
        switch (lengthOfDigit) {
            case 4 :
                return (
                    convertDigits(numArray[0], romanNumerals.thousand)
                    + convertDigits(numArray[1], romanNumerals.hundred, romanNumerals.fiveHundred, romanNumerals.thousand)
                    + convertDigits(numArray[2], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[3], romanNumerals.single, romanNumerals.five, romanNumerals.ten)
                )
            case 3 :
                return (
                    convertDigits(numArray[0], romanNumerals.hundred, romanNumerals.fiveHundred, romanNumerals.thousand)
                    + convertDigits(numArray[1], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[2], romanNumerals.single, romanNumerals.five, romanNumerals.ten)
                )
            case 2:
                return (
                    convertDigits(numArray[0], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[1], romanNumerals.single, romanNumerals.five, romanNumerals.ten)
                )
            case 1:
                return convertDigits(input, romanNumerals.single, romanNumerals.five, romanNumerals.ten)
        }
    } catch (e) {
        return e.message
    }

}

input.addEventListener("input", (event: Event): void => {
    event.preventDefault()
    const input: HTMLInputElement = event.target as HTMLInputElement
    output.innerHTML = convertToRomNum(Number(input.value))
})
