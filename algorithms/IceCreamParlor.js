//https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem

function solve(arr, money) {
    // Complete this function

    let temp = [];

    arr.forEach((x, index) => {
        if (x < money) {
            temp.push({index: index, value: x});
        }
    });


    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = i + 1; j < temp.length; j++) {
            if (temp[i].value + temp[j].value === money) {
                return [temp[i].index + 1, temp[j].index + 1].join(" ");
            }
        }
    }
}


console.log(solve([1, 4, 5, 3, 2], 4));
console.log(solve([2, 2, 4, 3], 4));