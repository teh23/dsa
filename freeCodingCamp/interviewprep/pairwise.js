//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
function pairwise(arr, arg) {
    const pair = [];
    arr.forEach((ele, idx) => {
        for (let i = idx + 1; i < arr.length; i++) {
            if (
                ele + arr[i] === arg &&
                !pair.includes(idx) &&
                !pair.includes(i)
            ) {
                pair.push(i, idx);
                break;
            }
        }
    });

    return pair.reduce((prev, curr) => (prev += curr), 0);
}

pairwise([1, 1, 1], 2);
