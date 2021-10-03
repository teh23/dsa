function swap(arr, firstIndex, secondIdx) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIdx];
    arr[secondIdx] = temp;
}

function smallestIndex(arr, startIndex) {
    let smallest = arr[startIndex];
    let index = startIndex;
    for (let i = startIndex; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
            index = i;
        }
    }
    return index;
}

function selectionSort(array) {
    // Only change code below this line
    for (let i = 0; i < array.length; i++) {
        let small = smallestIndex(array, i);
        swap(array, small, i);
    }
    return array;
    // Only change code above this line
}
console.log(
    selectionSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);
