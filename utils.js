//--------------1------------------
function matrixProduct(mat1, mat2) {
    let product = [];
    for (let i = 0; i < mat1.length; ++i) {
        product[i] = [];
        for (let j = 0; j < mat1[0].length; ++j) {
            let sum = 0;
            for (let k = 0; k < mat2[0].length; ++k) {
                sum += mat1[i][k] * mat2[k][j];
            }
            product[i][j] = sum;
        }
    }
    return product;
}


//--------------2------------------
function sumOfMatrices(mat1, mat2) {3
    if (mat1.length == mat2.length) {
        for (let i = 0; i < mat1.length; ++i) {
            if (mat1[i].length !== mat2[i].length) {
                console.log('Your matrices does not contain the same number of elements!');
                return;
            }
        }

        let mat3 = []
        for (let row = 0; row < mat1.length; ++row) {
            for (let col = 0; col < mat2[0].length; ++col) {
                let sum = 0
                sum = mat1[row][col] + mat2[row][col]
                mat3.push(sum);
            }
        }
        return mat3
    }
    else {
        console.log('Your matrices does not contain the same number of elements!');
    }
}
//--------------3 ------------------
function sumOfArray(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; ++i) {
        value += arr[i];
    }
    return value;
}

function sumOfEachRow(mat) {
    let k = 0;
    let arr2 = [];
    for (let row = 0; row < mat.length; ++row) {
        k = sumOfArray(mat[row]);
        arr2.push(k)
    }
    return arr2;
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
}