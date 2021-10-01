//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
function updateInventory(arr1, arr2) {
    arr1.reduce((prev, curr) => {
        arr2.forEach((ele, idx) => {
            if (ele[1] === curr[1]) {
                curr[0] += ele[0];
                arr2.splice(idx, 1);
            }
        });
    }, []);
    arr1.push(...arr2);
    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}
