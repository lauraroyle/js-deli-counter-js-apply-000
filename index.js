function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

// used .push to add to the katzDeli array
// used template literals uses 'name' placeholder and interpolate into the string
// used array.length to show number in the katzDeli array and show position in line

function nowServing (katzDeli) {
  if (katzDeli.length > 0) {
    var nextPerson = katzDeli[0];
    katzDeli.shift();
      return `Currently serving ${nextPerson}.`;
        } else {
            return `There is nobody waiting to be served!`;
              }
}

// used if statment to handle scenario where if the array length is greater than 0 (eg there is someone in the line)
// then create a variable which equals the array itself
// return the string including the variable (eg nextPerson)
// used else statement so if array is 0, the string is returned to show noone in line

var array = []; // this is needed later to house the position and person in the line
function currentLine(katzDeli) { 
  if (katzDeli.length == 0) {  // if the line length is equal to zero, then return the line is empty
    return `The line is currently empty.`;
  } else {
    for (var i = 0; i < katzDeli.length; i++) { // if the line is less than zero then keep incrementally adding to the line
      array.push(` ${i+1}. ${katzDeli[i]}`); // array.push is taking i+1 =1 (to account for array index starting from 0 and putting this infront of the current line (katzDeli)
    }
    return `The line is currently:` + array; // string plus the array which (as above) includes the person and the position in the queue
  }
}
