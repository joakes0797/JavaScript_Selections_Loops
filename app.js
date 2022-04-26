console.log("Hello World!\n==========\n");

// Exercise 1 Section -----------------------------------------
console.log("EXERCISE 1:\n==========\n");
console.log("Print odds between 1 and 100: ");

for (let i = 1; i <= 100; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
    else {
        continue;
    }
}

// Exercise 2 Section -----------------------------------------
console.log("EXERCISE 2:\n==========\n");
console.log("FizzBuzz 3, 5, and 3 & 5 from 1 to 100: ");
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}: FIZZBUZZ`);
    }
    else if (i % 3 == 0) {
        console.log(`${i}: FIZZ`);
    }
    else if (i % 5 == 0) {
        console.log(`${i}: BUZZ`);
    }
    else {
        continue;
     }
}



