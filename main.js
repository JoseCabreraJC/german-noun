const fs = require("fs")

const randomNoun = () => {

    let rawdata = fs.readFileSync('./data/words.json')
    let words = JSON.parse(rawdata)
    
    const keys = Object.keys(words)
    
    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length)
    
    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex]
    
    // Use the key to get the corresponding name from the "names" object
    const name = words[randKey]
    return name;
}
// console.log(name)

exports.randomNoun = randomNoun;