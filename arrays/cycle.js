//Write a program to cyclically rotate an array by one.
const cycle = (array) => {
    array.unshift(array.pop());
    return array;
};

console.log(cycle([1, 2, 3, 4]));
