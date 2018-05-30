(function (inString) {

    let count = 1, obj = {};

    let splitArr = inString.split('');
    for (let i = 0; i < splitArr.length; i++) {
        for (let j = splitArr.length; j > i; j--) {
            let slice = inString.slice(i, j);
            if (obj[slice] == null)
                obj[slice] = true;
        }
    }

    console.log(Object.keys(obj).length);
})
('kincenvizh');
//('abcde');