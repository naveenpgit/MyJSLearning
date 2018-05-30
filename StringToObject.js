(function (s) {

    let res = {},
        split = s.split(/=|&|,/);

    for (i = 0; i < split.length - 1; i++) {
        if (split[i + 1].startsWith('[')) {
            let temp = [];
            for (j = i + 1; ; j++) {
                let current = split[j];
                if (current.endsWith(']')) {
                    temp.push(current.slice(0, current.length - 1));
                    break;
                } else if (current.startsWith('[')) {
                    temp.push(current.slice(1, current.length));
                } else {
                    temp.push(current);
                }
            }


            res[split[i]] = addressArray(temp);
            i = j;
        } else {
            res[split[i]] = split[i + 1];
            i++;
        }
    }


    function addressArray(addressArray) {
        let temp = {}, addresses = [];

        for (let i = 0; i < addressArray.length - 1; i += 2) {
            let key = addressArray[i], value = addressArray[i + 1];

            if (temp[key]) {
                addresses.push(temp);
                temp = {};
                temp[key] = value;
            }
            else {
                temp[key] = value;
            }
        }

        addresses.push(temp);
        return addresses;

    }


    console.log(JSON.stringify(res));
})
("name=naveen&age=10&address=[street=1stCross&pin=1234,street=2ndCross&pin=5678]");