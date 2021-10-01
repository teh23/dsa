//Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

const sort = (array) => {
    const temp = [];
    let cal = 0;
    array.forEach((val) => {
        if (val === 2) temp.push(val);
        if (val === 0) {
            temp.unshift(val);
            cal++;
        }
        if (val === 1) {
            temp.splice(cal, 0, 1);
        }
    });

    return temp;
};

console.log(sort([1, 0, 0, 1, 2, 1]));

/*
boilerplate
const sort = (array) =>{
    return array
}

console.log(sort([1,2,3,4]))

*/
