(function (inString) {

    let obj = inString.split(' ').reduce((accu, x) => {
        if (x.endsWith('.')) {
            x = x.slice(0, x.length - 1);
        }

        if (accu[x.length]) {
            accu[x.length].push(x.toLowerCase());
        } else {
            accu[x.length] = [];
            accu[x.length].push(x.toLowerCase());
        }

        return accu;
    }, {});

    let res = Object.keys(obj).sort((a, b) => a - b).reduce((accu, x) => {
        return accu.concat(obj[x]);
    }, []).join(" ");
    console.log(res.charAt(0).toUpperCase() + res.slice(1) + '.');
})('The lines are printed in reverse order.');