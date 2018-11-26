const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(planet => {
  const planetEl = document.getElementById("planets")
  let plantetName = document.createElement("p")
  plantetName.innerHTML = `${planet}`
  planetEl.appendChild(plantetName)
})



/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    */

const properPlantet = planets.map(x => x.charAt(0).toUpperCase() + x.slice(1))
console.log("Capitalized planets:",properPlantet)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const plantetsE = planets.filter(planet => planet.includes("e"))
console.log("Planets with 'e':", plantetsE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
let sentence = words.reduce((a, b) => 
  `${a} ${b}`
)
console.log("Sentence of truth:", sentence)