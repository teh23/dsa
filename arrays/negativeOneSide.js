//Move all the negative elements to one side of the array

const negative = (array) => {
    return array.reduce((prev, curr) => {
        if (curr < 0) prev.unshift(curr);
        else prev.push(curr);

        return prev;
    }, []);
};

console.log(negative([1, 2, 3, 4, -10, -2, 10, 2, 2, -1, -2, 4]));
