var input = document.querySelector('#number-input');
var output = document.querySelector("#output");
var convertToRomNum = function (input) {
    var arrayInput = String(input).split('');
    var numArray = arrayInput.map(function (num) {
        return Number(num);
    });
    console.log(numArray);
    //apply conversion for each digit depending on position within digit
    // Try for single digit only
    var output = "";
    switch (input) {
        case 1:
            output += "I";
            break;
        case 2:
            output += "II";
            break;
        case 3:
            output += "III";
            break;
        case 4:
            output += "IV";
            break;
        case 5:
            output += "V";
            break;
        case 6:
            output += "VI";
            break;
        case 7:
            output += "VII";
            break;
        case 8:
            output += "VIII";
            break;
        case 9:
            output += "IX";
            break;
    }
    return output;
};
var arr = { age: 34, name: 'bleh' };
var age = arr.age;
console.log(age);
input.addEventListener("input", function (event) {
    event.preventDefault();
    var input = event.target;
    output.innerHTML = convertToRomNum(Number(input.value));
});
