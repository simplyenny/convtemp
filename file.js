
function convertFahrToCelsius(fahrenheitVar) {
    const fahrTemp = fahrenheitVar;
    if (isNaN(fahrTemp)) {
        return `${fahrTemp} is not a valid number but a/an $(parameter's type)}.`;
}

const fahrToCel = (fahrTemp - 32) * 5 / 9;
const result = fahrToCel.toFixed(4);
const message = `${fahrTemp} is ${result}.`;
console.log(message);

}

console.log(convertFahrToCelsius(45));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({temp: 0}));


function checkYuGiOh(n) {
    if(isNaN(n)) {
        return `invalid parameter: ${n}`
    }


const resultsArr = []
for (let index = 1; index <= n; index++) {
    if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0) {
        resultsArr.push('yu-gi-oh')
    } else if (index % 2 === 0 && index % 3 === 0) {
        resultsArr.push('yu-gi') 
    } else if (index % 2 === 0 && index % 5 === 0) {
        resultsArr.push('yu-oh')
    } else if (index % 3 === 0 && index % 5 === 0) {
        resultsArr.push('gi-oh') 
    } else if (index % 2 === 0) {
        resultsArr.push('yu')
    } else if (index % 3 === 0) {
        resultsArr.push('gi')
    } else if (index % 5 === 0) {
        resultsArr.push('oh')
    } else {
        resultsArr.push(index)
    }
   }
console.log(resultsArr);

}

console.log(checkYuGiOh(10))
console.log(checkYuGiOh(5))
console.log(checkYuGiOh('5'))
console.log(checkYuGiOh('fizzbuzz is meh'))


