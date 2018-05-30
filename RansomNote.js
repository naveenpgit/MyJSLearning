//https://www.hackerrank.com/challenges/ctci-ransom-note/problem
function main(magazine, ransom) {
    magazine = magazine.split(' ');
    ransom = ransom.split(' ');

    magazineO = {};

    magazine.forEach(x => {
        magazineO[x] === undefined ? magazineO[x] = 1 : magazineO[x] += 1;
    });

    var result = ransom.every(x => {
        if (magazineO[x] > 0) {
            magazineO[x] -= 1;
            return true;
        }
    });

    console.log(result ? 'Yes' : 'No');
}

main('give me one grand today night', 'give one grand today');
main('two times three is not four', 'two times two is four');