function swapsCount(array) {

    let swaps = 0,
        n = array.length;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaps++;
            }
        }

    }

    console.log(swaps);
}

swapsCount([1, 2, 3]);
swapsCount([3, 2, 1]);