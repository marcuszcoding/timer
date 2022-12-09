let array = process.argv.slice(2); //slices the command line into array of strings and doesnt display early text
if (array.length !== 0)  {  // if command line input isnt empty run for loop
  for (const item of array) {  // for loop to loop through command line inputs array
    if (Number(item) > 0 && Number.isInteger(Number(item))) {  //Checking if input is greater than 0 and if the input is a number
      setTimeout(() => {  // timeout for the input
        process.stdout.write('\x07'); // makes sound
      }, Number(item) * 1000); // changes the item of the array to a number then multiplies by 1000 to get seconds
    }
  }
}

/*
PSUEDO STEPS

edge cases are if not a number, no input, or number is less than 0, just return nothing

1.) process argv to get command line inputs
2.) we need a for loop in order to go through each item of the command line (array)
3.) set timeout with the sound and time by the array item number.

*/