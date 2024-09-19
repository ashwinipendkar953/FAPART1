// program 1
const strings = ["hello", "world", "javascript", "openai", "language"];


const reversedStrings = strings.map((str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr
});

console.log(reversedStrings)



// Program 2
const phrases = ["hello", "how are you", "good morning", "have a nice day"];

const phrasesWithExclamationMark = phrases.map((phrase) => phrase + "!");
console.log(phrasesWithExclamationMark)


// Program 3
const shoppingCart = {
  apple: 25,
  banana: 18,
  orange: 32,
};

const prices =  Object.values(shoppingCart).map((price) => `Rs.${price}`)
console.log(prices)


// Program 4
const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Phone" },
  { id: 103, name: "Tablet" },
];

const productId = products.map((product) => product.id)
console.log(productId)

// Program 5
 const temperatures = [-5, 10, -2, 15, -10, 5];
const filterTemp = temperatures.filter((temp) => temp < 0)
console.log(filterTemp)

// Program 6
const tasks = [
  { id: 1, title: "Task 1", priority: "high" },
  { id: 2, title: "Task 2", priority: "medium" },
  { id: 3, title: "Task 3", priority: "low" },
  { id: 4, title: "Task 4", priority: "high" },
];

const filterTasks = tasks.filter((task) => task.priority === "high")
console.log(filterTasks)

// Program 7
const sentences = [
  "JavaScript is a programming language.",
  "Python is also a programming language.",
  "JavaScript frameworks are popular.",
  "I love to learn new programming languages.",
];

const filterSentences = sentences.filter((sentence) => sentence.includes('JavaScript'))

console.log(filterSentences)


// Program 8
const students = [
  { name: "Alice", GPA: 3.5 },
  { name: "Bob", GPA: 2.8 },
  { name: "Charlie", GPA: 3.2 },
  { name: "David", GPA: 2.9 },
];

const filterStudents = students.filter((student) => student.GPA > 2.9)
console.log(filterStudents)

// Program 9
const words = ["apple", "banana", "kiwi", "lime", "grape"];

const longestWord  = words.reduce((acc, curr) => curr.length > acc.length ? curr : acc , words[0])

console.log(longestWord)

// Program 10
const num = [10, 25, 8, 30, 15];

const highestValue = num.reduce((acc, curr) => curr > acc ? curr : acc  , num[0])

console.log(highestValue)

// Program 11
const countries = [
  { country: "USA", capital: "Washington, D.C." },
  { country: "France", capital: "Paris" },
  { country: "Japan", capital: "Tokyo" },
];

const countriesObject = countries.reduce((acc, curr) => {
   acc[curr.country] = curr.capital 
  return acc
}, {})

console.log(countriesObject)

// Program 12
const books = [
  { title: "Book 1", author: "Alice" },
  { title: "Book 2", author: "Bob" },
  { title: "Book 3", author: "Charlie" },
  { title: "Book 4", author: "Anna" },
];

const filterBooks = books.filter((book) => book.author.startsWith('A'))

console.log(filterBooks)


// Program 13 
const wordsFilter = ["level", "apple", "radar", "banana", "civic"];

const palindromes = wordsFilter.filter((word) => {
  let reversedStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedStr += word[i];
  }
  return word === reversedStr
})

console.log(palindromes)
