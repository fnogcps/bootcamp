/*
 * Typing Game - Edabit
 *
 * Create a function that takes in two arrays:
 * the array of user-typed words, and the array of correctly-typed words
 * and outputs an array containing 1s (correctly-typed words)
 * and -1s (incorrectly-typed words).
 *
 * https://edabit.com/challenge/KESyfS3A5vB2jkxFR
 * github.com/fnogcps
 */

correctStream = (a, b) => a.map((_, c) => (a[c] == b[c] ? 1 : -1));
module.exports = {correctStream};
