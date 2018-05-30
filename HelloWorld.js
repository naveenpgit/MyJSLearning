'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    console.log("--- SIGINT --- ");
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const parameterVariable = readLine();

    greeting(parameterVariable);
}

function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}