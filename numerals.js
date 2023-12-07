var input = document.querySelector('#number-input');
var output = document.querySelector("#output");
var romanNumerals = {
    single: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    hundred: "C",
    fiveHundred: "D",
    thousand: "M"
};
var convertDigits = function (input, unitLetter, fiveUnitLetter, tenUnitLetter) {
    if (unitLetter === void 0) { unitLetter = ""; }
    if (fiveUnitLetter === void 0) { fiveUnitLetter = ""; }
    if (tenUnitLetter === void 0) { tenUnitLetter = ""; }
    switch (input) {
        case 0:
            return "";
        case 1:
            return unitLetter;
        case 2:
            return unitLetter + unitLetter;
        case 3:
            return unitLetter + unitLetter + unitLetter;
        case 4:
            return unitLetter + fiveUnitLetter;
        case 5:
            return fiveUnitLetter;
        case 6:
            return fiveUnitLetter + unitLetter;
        case 7:
            return fiveUnitLetter + unitLetter + unitLetter;
        case 8:
            return fiveUnitLetter + unitLetter + unitLetter + unitLetter;
        case 9:
            return unitLetter + tenUnitLetter;
        default:
            return "error";
    }
};
var convertToRomNum = function (input) {
    try {
        if (input > 3000) {
            throw new Error("Max number is 3000");
        }
        if (input < 0) {
            throw new Error("Positive integers only");
        }
        var arrayInput = String(input).split('');
        var numArray = arrayInput.map(function (num) {
            return Number(num);
        });
        var lengthOfDigit = numArray.length;
        switch (lengthOfDigit) {
            case 4:
                return (convertDigits(numArray[0], romanNumerals.thousand)
                    + convertDigits(numArray[1], romanNumerals.hundred, romanNumerals.fiveHundred, romanNumerals.thousand)
                    + convertDigits(numArray[2], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[3], romanNumerals.single, romanNumerals.five, romanNumerals.ten));
            case 3:
                return (convertDigits(numArray[0], romanNumerals.hundred, romanNumerals.fiveHundred, romanNumerals.thousand)
                    + convertDigits(numArray[1], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[2], romanNumerals.single, romanNumerals.five, romanNumerals.ten));
            case 2:
                return (convertDigits(numArray[0], romanNumerals.ten, romanNumerals.fifty, romanNumerals.hundred)
                    + convertDigits(numArray[1], romanNumerals.single, romanNumerals.five, romanNumerals.ten));
            case 1:
                return convertDigits(input, romanNumerals.single, romanNumerals.five, romanNumerals.ten);
        }
    }
    catch (e) {
        return e.message;
    }
};
input.addEventListener("input", function (event) {
    event.preventDefault();
    var input = event.target;
    output.innerHTML = convertToRomNum(Number(input.value));
});
