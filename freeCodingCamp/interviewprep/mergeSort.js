const merge = (l, r) => {
    const c = [];
    while (l.length && r.length) {
        c.push(l[0] > r[0] ? r.shift() : l.shift());
    }
    while (l.length) {
        c.push(l.shift());
    }
    while (r.length) {
        c.push(r.shift());
    }
    return c;
};

function mergeSort(array) {
    // Only change code below this line
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const l = array.slice(0, middle);

    const r = array.slice(middle, array.length);

    return merge(mergeSort(l), mergeSort(r));
    // Only change code above this line
}

console.log(mergeSort([1, 52, 2, 4, 1]));
