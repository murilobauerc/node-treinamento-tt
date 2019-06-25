const sum = (a,b) => {
    return a + b
}

const sub = (a,b) => {
    return a - b;
}

const division = (a,b) => {
    if(b < 1) {
        console.log(`Não pode dividir por zero. O valor de B é ${b}`);
    }
    return a / b;
}

const multiply = (a,b) => {
    return a * b;
}

module.exports = {
    sum,
    sub,
    division,
    multiply
}