'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('student_sample.json');
let student = JSON.parse(rawdata);
console.log(student);


fs.readFile('student_sample.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call');

