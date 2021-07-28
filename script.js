"use strict";

// Check if 2 strings are anagram, returns true!
const str1 = "undertale";
const str2 = "deltarune";

const isAnagram = (string1, string2) => {
  const strArr1 = string1.split("").sort().join("");
  const strArr2 = string2.split("").sort().join("");

  strArr1 === strArr2 ? console.log(true) : console.log(false);
};
// isAnagram(str1, str2);

/* ================================================================== */

// Count 1-50, but every number divisible by 4 it will output "Hello"
// And divisible by 6, it will output "world"

const countToFifty = () => {
  for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      console.log(`${i}: Hello World`);
    } else if (i % 6 === 0) {
      console.log(`${i}: World`);
    } else if (i % 4 === 0) {
      console.log(`${i}: Hello`);
    } else {
      console.log(i);
    }
  }
};
// countToFifty();

// add and multiply all numbers inside an array

const myNumbers = [1, 2, 3, 4, 5, 6];

const sumNum = myNumbers.reduce((a, b) => a + b);
const mulNum = myNumbers.reduce((a, b) => a * b);

// console.log(sumNum, mulNum);

// Exponential of a given number

const findExp = (givNum, expoNum) => {
  let result = givNum;
  for (let i = 1; i < expoNum; i++) {
    result *= givNum;
  }
  console.log(result);
};
// findExp(5, 5);

// Extract words from a paragraph without punctuation

const paragraph =
  "Lorem/ ipsum dolor sit amet consectetur adipisicing; elit. Quod quisquam: cumque animi ratione! nesciunt, perferendis modi. maiores doloremque! consequatur, placeat.";

// to remove punctuations
// use .replace("new_string_here", "string to replace")
// use .replace(/[ *insert Punctuation Here* ]/g, "")
// "g" means global to each word inside the paragraph

const getAllWords = (words) => {
  const removePunc = words.replace(/[\,.!/?]/g, "");
  const splitWords = removePunc.split(" ");

  splitWords.map((word) => {
    console.log(word);
  });
};

getAllWords(paragraph);
