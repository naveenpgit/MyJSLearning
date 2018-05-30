(function (inArray, m) {

        if (m == 0)
            return 0;

        inArray = inArray.map(x => x % 2);
        let count = 0;

        for (let i = 0; i < inArray.length; i++) {
            for (let j = inArray.length; j > i; j--) {
                let slice = inArray.slice(i, j);
                if (slice.length >= m) {
                    if (slice.reduce((sum, current) => sum + current) === m) {
                        count++;
                    }
                }
            }
        }

        console.log("Count ::: " + count);
        return count;
    }
)
([2, 5, 4, 9], 1); // result 6
//([0, 1, 0, 1], 1); // result 6
//([1, 2, 3, 4, 5], 2); // result 4
//([1, 0, 1, 0, 1], 2); // result 4
//([2, 5, 4, 9], 3); // result 0