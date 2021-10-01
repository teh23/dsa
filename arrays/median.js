function find_median(arr) {
    const array = arr.sort((a, b) => a - b);

    if (array.length % 2 === 0) {
        return parseInt(
            (array[array.length / 2 - 1] + array[array.length / 2]) / 2
        );
    } else {
        return array[Math.round(array.length / 2 - 1)];
    }
}

console.log(find_median([1, 4, 6, 3, 6, 1]));
