'use strict';

const fs = require('fs');

fs.readFile('practice_result_01.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);

    const practice_session = Object.keys(student);
    console.log(practice_session);

    const practice_session_details = Object.values(student);
    console.log(practice_session_details);

    //we have multiple arrays for one practice session! Need to loop through it
    
    var res = [];

    for (var i in practice_session_details) {
        var obj = eval('(' + practice_session_details[i] + ')');
        for (var j in obj)
        res.push(obj[j]);
    }

    console.log(res)
});

console.log('This is after the read call');

