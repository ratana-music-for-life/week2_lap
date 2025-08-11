let numbers = [12, 45, 7, 23, 56, 10];
let big = numbers[0]
for(let i = 1 ; i < numbers.length ; i++){
    if(numbers[i] > big) big = numbers[i]
}
console.log(big)
