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
