
const cardDescriptions = {
    "AMEX": {
        "begins_with": [34, 37],
        "length": [15]
    },
    "Discover": {
        "begins_with": [6011],
        "length": [16]
    },
    "Mastercard": {
        "begins_with": [51, 52, 53, 54, 55],
        "length": [16]
    },
    "VISA": {
        "begins_with": [4],
        "length": [13, 16]
    }
}

const getIssuer = (number) => {
    
    if (typeof number === "number") number = number.toString();

    // firstNOfNumbers holds 1, 2, and 4 which are the 3 ranges from the 0th index to
    // determine the issuer of the credit card. Discover would use 4, AMEX and Mastercard would use 2,
    // and VISA would use 1.
    const firstNOfNumbers = [1, 2, 4], cardNumberLength = number.length;
    
    let firstNDigitsOfCardNumber, cardDescription, doesBeginWithNumber, upperBound;
    
    for (let card in cardDescriptions) {
        
        cardDescription = cardDescriptions[card];
        
        for (let n in firstNOfNumbers) {
            
            upperBound               = firstNOfNumbers[n];
            firstNDigitsOfCardNumber = number.substring(0, upperBound);
            doesBeginWithNumber      = cardDescription.begins_with.includes(parseInt(firstNDigitsOfCardNumber));
            cardNumberLengthIsValid  = cardDescription.length.includes(cardNumberLength);

            if (doesBeginWithNumber && cardNumberLengthIsValid) return card;
            
        };
    }

    return "Unknown";
}

module.exports.getIssuer = getIssuer;