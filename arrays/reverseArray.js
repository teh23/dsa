//Reverse the array 3
const reverseArray = (array) => {
    const rev = [];
    array.map((val, idx) => rev.unshift(val));
    if (Array.isArray(array)) return rev;
    //if (Array.isArray(array)) return .reverse();
};

console.log(reverseArray([1, 2, 3, 4]));
