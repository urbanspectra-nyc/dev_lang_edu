/*
 * This function converts a digit into a random phone keypad letter
 * corresponding to that digit.  Non-digits are not converted.
 */
var getRandomLetterFromDigit = function(digit) {
    var conversion = [ "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS",
        "TUV", "WXYZ" ];

    // 0 and 1 don't convert into letters.
    var possibleLetters = conversion[digit - 2];
    return possibleLetters ?
        possibleLetters[Math.floor(possibleLetters.length * Math.random())] :
        digit;
};

// Ask the user for a phone number.
var phoneNumber = prompt("Please enter a phone number:");

/*
 * A "phone number" is any sequence of digits, spaces, parentheses,
 * and dashes.  The code right after "match" may look scary, but
 * is common in advanced scripts.  For now, just make sure to type 
 * it in exactly.
 */
if (phoneNumber.match(/^[0-9\-\(\)\s]+$/)) {
    // Build the converted phone number, one character at a time.
    var mnemonic = "";
    for (var index = 0; index < phoneNumber.length; index += 1) {
        mnemonic += getRandomLetterFromDigit(phoneNumber[index]);
    }
    
    alert(mnemonic + " is a possible letter equivalent of " +
        phoneNumber + ".");

} else {
    // There was at least one char that was not a digit, space,
    // parenthesis, or dash.
    alert(phoneNumber + " cannot be interpreted as a phone number.");
}
