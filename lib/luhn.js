const luhnCheck = (number) => {

    if (number === null) return false;
    if (typeof number === "number") number = number.toString();
    if (number.length === 0) return false; 

    let currentNumber, sumOfAllDigits = 0, isSecondDigit = false;
    
    for (let i = number.length - 1; i >= 0; i--) {

        currentNumber = parseInt(number[i]);
        
        if (isSecondDigit) {
            currentNumber = doubleDigit(currentNumber);
        }

        isSecondDigit   = !isSecondDigit;
        sumOfAllDigits += parseInt(currentNumber);
    }

    return sumOfAllDigits % 10 === 0;
}

const doubleDigit = (digit) => {
    const maxBound = 9;
    let doubledNumber, numberSplitInTwo, sumOfProduct;

    doubledNumber = digit * 2;

    if (doubledNumber > maxBound) {
        numberSplitInTwo = doubledNumber.toString().split('');
        sumOfProduct     = parseInt(numberSplitInTwo[0]) + parseInt(numberSplitInTwo[1]);
        doubledNumber    = sumOfProduct;
    }      
    
    return doubledNumber;
}

module.exports.luhnCheck = luhnCheck;
module.exports.doubleDigit = doubleDigit;