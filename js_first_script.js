// Ask the user for a phone number phrase.
var phrase = prompt('Please enter a phone number "phrase:"');

// Association of each letter with the number of the phone key.
var conversion = { A: 2, B: 2, C: 2, D: 3, E: 3, F: 3, G: 4, 
    H: 4, I: 4, J: 5, K: 5, L: 5, M: 6, N: 6, O: 6, P: 7, Q: 7, 
    R: 7, S: 7, T: 8, U: 8, V: 8, W: 9, X: 9, Y: 9, Z: 9 };
 
// Build up the phone number one digit at a time.
var phoneNumber = "";
for (var index = 0, length = phrase.length; index < length; index += 1) {
    var symbol = phrase[index].toUpperCase();
    phoneNumber += conversion[symbol] || symbol;
}

alert("You want to dial " + phoneNumber + ".");
