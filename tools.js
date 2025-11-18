


const CSSprop = {
    get: (elm, name) => getComputedStyle(elm).getPropertyValue('--' + name),
    set: (elm, name, value) => elm.style.setProperty('--' + name, value)
};


const rotatearray = (array) => {
    let first = array.shift();
    array.push(first);
};