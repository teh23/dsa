//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort
function swap(arr, firstIdx, secondIdx) {
    let temp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = temp;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

console.log(
    bubbleSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
