const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

let newTutorials = []
  for (let i = 0; i < tutorials.length; i++ ){
    let sentences = tutorials.map(string => string.split(' '))  //returns array of 10 arrays of words
    let chars = sentences[i].map(word => word.split('')) // returns array of arrays of chars
    let joinSentence = []    
    for (let y = 0; y < chars.length; y++) {
               let firstUp = chars[y][0].toUpperCase()
                let newChars = chars[y].splice(1)
                newChars.unshift(firstUp)
                newChars       // ['W', 'h', 'a', 't']
                joinSentence.push(newChars.join('')) // "What"
             }
    newTutorials.push(joinSentence.join(' '))
    
   } 
   return newTutorials
   
  }

