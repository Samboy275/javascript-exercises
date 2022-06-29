const removeFromArray = function(arr, ...elements) {
    filteredArr = arr.filter((item) => {
        for (const element in elements)
        {
            if (item === elements[element]){
                return false;
            }
        }
        return true;
    });
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
