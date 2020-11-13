const functions = require('./utils.js')

let mat1 = [
    [1, 2],
    [3, 4],
];

let mat2 = [
    [5, 6],
    [7, 8],
];

console.log(functions.matrixProduct(mat1, mat2));
console.log(functions.sumOfMatrices(mat1, mat2));
console.log(functions.sumOfEachRow(mat1));