let power = function (a, b) {

    if (b === 0)
        return 1;

    let temp = power(a, parseInt(b / 2));

    let number = (b % 2 == 0 ? 1 : a);

    return b < 0 ? temp * temp / number : number * temp * temp
};

console.log(power(2, 9) === Math.pow(2, 9));