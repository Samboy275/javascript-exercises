const sumAll = function(num1, num2) {
    if ((typeof(num1) !== 'number' || typeof(num2) !== 'number')
        ||(num1 < 0 || num2 < 0))
    {
        return 'ERROR';
    }
    sum = 0;
    let i = (num1 > num2) ? num2 : num1;
    let lastNum = (num1 > num2) ? num1 : num2;
    for (; i <= lastNum; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
