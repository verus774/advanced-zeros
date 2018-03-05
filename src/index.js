module.exports = function getZerosCount(number, base) {
    const a = getNumbersCount(factorize(base));
    const res = [];
    const original = number;

    for (let key in a) {
        let count = 0;
        number = original;

        while (number > 0) {
            number = Math.floor(number / key);
            count += number;
        }
        res.push(Math.floor(count / a[key]));
    }
    return Math.min(...res);
};

function factorize(number) {
    const res = [];
    let multiplier = 2;

    while (number > 1) {
        if (number % multiplier === 0) {
            number /= multiplier;
            res.push(multiplier);
        } else {
            multiplier++;
        }
    }
    return res;
}

function getNumbersCount(numbers) {
    const res = {};
    for (let number of numbers) {
        if (res.hasOwnProperty(number)) {
            res[number]++;
        } else {
            res[number] = 1;
        }
    }
    return res;
}
