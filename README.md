# Roman Numeral Converter
## The Challenge
Roman Numerals Tech Test
Language/Framework: JavaScript/TypeScript, frameworks allowed but not necessary
Length: Spend no more than 4 hours on this
Submission: Host on github pages

For this technical test, you will build a web page with an input box, where a user can type in any positive integer and the page will output the roman numeral equivilent.

The input box should update the number as the user types.

The maximum number possible should be 3000.

The user should be shown appropriate error messages.

Concerntrate on clean, readable, tested code.

Use any design you like, show us some creativity.

Use this website http://www.novaroma.org/via_romana/numbers.html to help you understand roman numerals.

## My process

### Built with

- Typescript

### What I learned

I used this challenge as a way to practice using Typescript. I encountered some issues when trying to use an event listener on the input element as I could not access the .value property from the event directly. After investigating this it was because I needed to type hint the event itself as an HTMLInputElement. Once this was added the issue was fixed.

Additionally I enjoyed working over the logic of actually converting a digit into the Roman Numeral string. Pseudo-coding out the process really helped to understand the steps needed. Firstly looking at how the roman numeral system works it is dependent on whether the digit is in the thousands, hundreds, tens or single units. There was a similar pattern but different letters used depending on which group the digit fell into. I therefore decided to turn the number to be converted into an array where I could then determine which conversion rule would be applied.
