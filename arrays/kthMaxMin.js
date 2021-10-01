//	Find the "Kth" max and min element of an array

const kthMaxMin = (array, kMin = 0, kMax = 0) => {
    return {
        min: array.sort((a, b) => a - b)[kMin],
        max: array.sort((a, b) => b - a)[kMax],
    };
};

console.log(kthMaxMin([1, 2, 3, 4, 5], 2));
