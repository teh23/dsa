//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

function sym(...array) {
    return array.reduce((prev, curr) => {
        curr.filter((elem, index) => index === curr.indexOf(elem)).forEach(
            (val) => {
                if (!prev.includes(val)) {
                    prev.push(val);
                } else {
                    prev = prev.filter((a) => a != val);
                }
            }
        );
        return prev.sort();
    }, []);
}
