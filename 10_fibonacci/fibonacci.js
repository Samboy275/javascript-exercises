const fibonacci = function(index) {
    if (index < 0)
    {
        return 'OOPS';
    }
    index = parseInt(index);
    let series = new Array();
    while(series.length < index)
    {
        if (series.length < 2)
        {
            series.push(1);
        } else {
            series.push(series[series.length - 1] + series[series.length - 2]);
        }
    }
    return series[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
