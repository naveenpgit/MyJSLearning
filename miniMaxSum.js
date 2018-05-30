function miniMaxSum(arr) {
    let result = [];
    arr.forEach(x => result.push(0));

    arr.forEach((x, index) => {
        result.forEach((y, yindex) => {
            if (index !== yindex) {
                result[yindex] = x + y;
            }
        });

    });

    console.log(Math.min(...result) + " " + Math.max(...result));
}

miniMaxSum([1, 2, 3, 4, 5]);