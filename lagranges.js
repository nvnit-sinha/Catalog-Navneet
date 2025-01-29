const fs = require('fs');


function readTestCase(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);
    return [data.keys.n, data.keys.k, data];
}


function decodeYValues(data) {
    let points = [];
    for (const key in data) {
        if (key !== 'keys') {
            let x = parseInt(key);
            let base = parseInt(data[key].base);
            let y = parseInt(data[key].value, base); 
            points.push([x, y]);
        }
    }
    return points;
}

function lagrangeInterpolation(points) {
    function L(i, x) {
        let result = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                result *= (x - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        return result;
    }

    return function (x) {
        let polynomial = 0;
        for (let i = 0; i < points.length; i++) {
            polynomial += points[i][1] * L(i, x);
        }
        return polynomial;
    };
}

function findSecretKey(interpolationFunction) {
    return Math.round(interpolationFunction(0)); 
}


const [n1, k1, data1] = readTestCase('testCase1.json');
const points1 = decodeYValues(data1);
const interpolationFunction1 = lagrangeInterpolation(points1);
const secretKey1 = findSecretKey(interpolationFunction1);

const [n2, k2, data2] = readTestCase('testCase2.json');
const points2 = decodeYValues(data2);
const interpolationFunction2 = lagrangeInterpolation(points2);
const secretKey2 = findSecretKey(interpolationFunction2);

console.log("Secret Key for Test Case 1:", secretKey1);
console.log("Secret Key for Test Case 2:", secretKey2);
