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
