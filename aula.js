//Aula5//
const nums = [10, 20, 30];

const total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(total);