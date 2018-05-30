// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
(function myCode(n, k) {
    let start = new Date();
    let tempObject = {},
        combObject = {};
    for (i = 1; i <= n; i++) {
        let remainder = i % k;
        if (!tempObject[remainder]) {
            tempObject[remainder] = 0;
        }
        tempObject[remainder]++;
    }

    console.log(tempObject);

    let result = Object.keys(tempObject).reduce((accumulator, currentValue) => {

        let newComb = combObject[tempObject[currentValue]];
        if (!newComb) {
            newComb = combination(tempObject[currentValue], k);
        }
        combObject[tempObject[currentValue]] = newComb;

        return accumulator + combination(tempObject[currentValue], k);
    }, 0);

    console.log(result);


    function combination(n1, r) {
        if (n1 < r)
            return 0;
        else {
            let fact = 1,
                max = Math.max(n1 - r, r),
                min = Math.min(n1 - r, r);

            for (i = n1; i > max; i--) {
                fact *= i;
            }
            return fact / factorial(min);
        }
    }

    function factorial(n2) {
        return n2 === 0 ? 1 : n2 * factorial(n2 - 1)
    }

    let end = new Date();
    console.log((end.getMilliseconds() - start.getMilliseconds()) / 1000);

})(750, 5);
