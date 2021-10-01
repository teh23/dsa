//Find the maximum and minimum element in an array
const maxMin = (array) => {
    return {
        min: array.sort((a, b) => a - b)[0],
        max: array.sort((a, b) => b - a)[0],
    };
};

console.log(maxMin([123, 1, 235, 253, 24, 2, 52]));
