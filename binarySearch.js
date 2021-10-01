/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

const indexMinium = (array, startIndex) => {
    let value = array[startIndex];
    let index = startIndex;
    for (let i = index; i < array.length; i++) {
        if (value > array[i]) {
            value = array[i];
            index = i;
        }
    }
    return index;
};

const swap = (array, indexFirst, indexSecond) => {
    let temp = array[indexFirst];
    array[indexFirst] = array[indexSecond];
    array[indexSecond] = temp;
};

const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let idx = indexMinium(array, i);
        swap(array, i, idx);
    }
    return array;
};

console.log(sort([22, 11, 99, 1, 2, 123, 88, 9, 7, 42]));
//Program.assertEqual(doSearch(primes, 73), 20);
