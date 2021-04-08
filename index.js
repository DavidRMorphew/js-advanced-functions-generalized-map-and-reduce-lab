// Add your functions here
function map(initialArray, callBackFunction){
    const newArray = [];
    initialArray.forEach(element => newArray.push(callBackFunction(element)));
    return newArray;
};

function reduce(initialArray, callBackFunction, initialValue = 0){
    const nonNumberArray = initialArray.some(el => { return typeof el !== "number"})
    let total;
    if (!!nonNumberArray) {
        total = true;
    } else {
        total = initialValue;
    };
    initialArray.forEach(element => {
        total = callBackFunction(element, total)
    });
    return total;
};