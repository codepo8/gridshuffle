


const CSSprop = {
    get: (elm, name) => getComputedStyle(elm).getPropertyValue('--' + name),
    set: (elm, name, value) => elm.style.setProperty('--' + name, value)
};


const rotatearray = (array, direction = 1) => {
    return direction > 0 ? 
        array.push(array.shift()) : 
        array.unshift(array.pop());
};
// rotatearray([1,2,3])  => [2,3,1]
// rotatearray([1,2,3], 1)  => [2,3,1]
// rotatearray([1,2,3], -1) => [3,1,2]

export { CSSprop, rotatearray };