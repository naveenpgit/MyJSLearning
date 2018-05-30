(function (subStr) {
    const https = require("https");

    let request = https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + subStr, (res) => {
        //data.data.map(x => x['Title']).filter(x => x.toLowerCase().includes(subStr)).forEach(x => console.log(x));
        res.setEncoding('utf8');
        res.on('data', function (body) {
            let dataRec = JSON.parse(body);
            dataRec.data.map(x => x['Title']).filter(x => x.toLowerCase().includes(subStr)).forEach(x => console.log(x));
        });
    });
    request.end();
})('spiderman');
