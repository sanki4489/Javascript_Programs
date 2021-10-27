//for each
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function (printFruits){
  console.log("I want to eat a " + printFruits)
})

fruits.forEach(f => {
  console.log('I want to eat a ' + f)

})

function printFruits(fruit){
  console.log('I want to eat a ' + fruit);
}
fruits.forEach(printFruits)







//.map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})






