function super_reduced_string(s) {
    // Complete this function

    let temp = {};

    s.split('').forEach(x => {

        if (temp[x]) {
            temp[x] += 1;
        } else {
            temp[x] = 1;
        }

    });

    let res = "";
    Object.keys(temp).forEach(x => {

        if (temp[x] % 2 !== 0) {
            res += x;
        }

    });

    return res || 'Empty String';
}


console.log(super_reduced_string('aaabccddd'));
console.log(super_reduced_string('aa'));
console.log(super_reduced_string('baab'));