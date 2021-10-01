//Find the Union and Intersection of the two sorted arrays.
const unionInter = (...array) => {
    return array.reduce(
        (prev, curr, idx, arr) => {
            curr.forEach((val) => {
                if (!prev.union.includes(val)) prev.union.push(val);

                !arr
                    .map((arrGlobal) => (arrGlobal.includes(val) ? true : ""))
                    .includes("") &&
                    !prev.inter.includes(val) &&
                    prev.inter.push(val);
            });
            return prev;
        },
        { union: [], inter: [] }
    );
};

console.log(unionInter([1, 2, 3, 4], [4, 5, 6, 7], [1, 2, 4], [4, 5, 6]));
